const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const { promisify } = require("util");
const { v4: uuidv4 } = require('uuid');
// const User = require("./../models/userModel");
// const catchAsync = require("../utils/catchAsync");
// const AppError = require("../utils/appError");
const sendEmail = require("../utils/mail");
const db = require("../models");
const User = db.user;
const TempUser = db.tempUser;
//middlewares
function createSendToken(user, res, code, message) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
    user = _.pick(user, ['first_name', 'last_name', 'email']);
    res.cookie("jwt", token);
    return res.status(code).json({
        token: token,
        status: "success",
        data: { user },
        message: message
    });
}
exports.authMiddleware = async (req, res, next) => {
    //check that the token is in the header
    if (
        !req.headers.authorization ||
        !req.headers.authorization.startsWith("Bearer ")
    ) {
        return res.status(400).json({
            status: "error",
            message: "please provide email and pass"
        });
    }
    const token = req.headers.authorization.split(" ")[1];
    // verifay the token
    let decode;
    try {
        decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    } catch {
        return res.status(400).json({
            status: "error",
            message: "not authantecated"
        });
    }
    //check that there is an existed user for this token as a user might be deleted and his token
    console.log("dddddddddddddddddddddddeeeeeeeeeeeeeeeeeeeeeeeeecccccccccccccccc", decode)
    //may still be valid
    const currentUser = await User.findOne({ where: { id: decode.id } });
    if (!currentUser) {
        return res.status(400).json({
            status: "error",
            message: "please provide email and pass"
        });
    }
    req.currentUser = currentUser.dataValues;
    console.log("#############fffffffffffffffffffffffffffffff##########################");
    console.log(req.currentUser);
    next();
};
exports.checkRole = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.currentUser.role)) {
            return next(new AppError("you are not permitted to do this action", 403));
        }
        next();
    };
};
exports.confirmUser = async (req, res, next) => {

    const confirmId = req.params.confirmId;
    let user = await TempUser.findOne({where:{temp_uid:confirmId},raw:true,attributes:['first_name','last_name','email','address','age','password']});
    await User.create(user);
    createSendToken(user, res, 201, "signed up successfully");
};

exports.signUp = async (req, res, next) => {

    let user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        address: req.body.address,
        age: req.body.age,
        password: req.body.password,
        temp_uid: uuidv4()
    }

    user.password = await bcrypt.hash(user.password, 12);
    user = await TempUser.create(user);
    //send mail
    const options = {
        email: 'hebaayman717@gmail.com',
        subject: "Confirm user registeration",
        message: `user  ${user.first_name} ${user.last_name} has registered  click <a href="${process.env.BASE_URL + 'auth/confirm/' + user.temp_uid}">${process.env.BASE_URL + 'auth/confirm/' + user.temp_uid}</a> to confirm`
    };
    try {
        await sendEmail(options);
    } catch (err) {
        console.log("🚀 ~ file: authController.js ~ line 114 ~ exports.signUp= ~ err", err)
        user.passwordResetToken = undefined;
        user.passwordResetExpiresAt = undefined;
        return res.status(500).json({
            status: "error",
            message: "some error happend while sending email :(  please try later!!"
        });
    }

    createSendToken(user, res, 201, "signed up successfully");
};
exports.logIn = async (req, res, next) => {
    //check the email and password exist
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            status: "error",
            message: "please provide email and pass"
        });
    }
    //check if there is a user with  correcthet password
    let user = await User.findOne({ where: { email: email } });
    const userPass = user.password;
    if (!user || !(await bcrypt.compare(password, userPass))) {
        return res.status(400).json({
            status: "error",
            message: "wrong values"
        });
    }
    createSendToken(user, res, 200, "loged in successfully");
};
