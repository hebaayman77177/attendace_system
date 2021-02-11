const _ = require("lodash");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

const moment = require('moment');
const db = require("../models");
const { getTime } = require('../utils');
const Attendance = db.attendance;
const User = db.user;
const MonthInfo = db.month_info;
const StaticRule = db.static_rule;

exports.takeAttendance = async (req, res, next) => {

    const now = new Date();
    const attendanceDay = now.getDate();
    const attendanceMonth = now.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    const attendanceYear = now.getFullYear();
    const attendanceHour = now.getHours();
    const attendanceMinute = now.getMinutes();
    const type = "attendance";
    const attendanceFullDate = now.toLocaleDateString()
    const attendanceFullTime = getTime(now);
    const attendanceFullDateTime = now.toLocaleString()

    let attendance = {
        user_id: req.currentUser.id,
        attendance_year: attendanceYear,
        attendance_month: attendanceMonth,
        attendance_day: attendanceDay,
        attendance_hour: attendanceHour,
        attendance_minute: attendanceMinute,
        type: type,
        attendance_full_date: attendanceFullDate,
        attendance_full_time: attendanceFullTime,
        attendance_full_date_time: attendanceFullDateTime,
    }

    attendance = await Attendance.create(attendance);
    attendance = _.pick(attendance, ['attendance_year', 'attendance_month', 'attendance_day', 'attendance_hour', 'attendance_minute', 'attendance_full_date', 'attendance_full_time', 'type']);

    return res.status(200).json({
        status: "success",
        data: { attendance }
    });

};

exports.DidAttendToday = async (req, res, next) => {

    const now = new Date();
    const attendanceFullDate = now.toLocaleDateString()
    const type = "attendance";
    let attendance = await Attendance.findOne({ where: { user_id: req.currentUser.id + "", attendance_full_date: attendanceFullDate, type } });
    attendance = _.pick(attendance, ['attendance_full_date', 'attendance_full_time']);
    const didAttend = _.isEmpty(attendance) ? false : true;

    return res.status(200).json({
        status: "success",
        data: {
            didAttend: didAttend,
            attendance
        }
    });
};

exports.UserMonthlyReport = async (req, res, next) => {

    const userId = req.currentUser.id;
    //get current month
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const { early_limit, late_limit } = await StaticRule.findOne();
    //get user attendance days for a given month 
    let numAttendances = await Attendance.count({ where: { attendance_month: month, attendance_year: year, user_id: userId + "", attendance_full_time: { [Op.lte]: moment(early_limit).format("YYYY-MM-DD hh:mm:ss") } } })
    const numLatePlusEarly = await Attendance.count({ where: { attendance_month: month, attendance_year: year, user_id: userId + "", attendance_full_time: { [Op.lte]: moment(late_limit).format("YYYY-MM-DD hh:mm:ss") } } })
    // get user late days for a given month
    const numLate = numLatePlusEarly - numAttendances
    // get month info
    const { num_days, num_vacs } = await MonthInfo.findOne({ where: { year: year, month: month } })
    const attendanceReport = {
        attendance: numAttendances,
        late: numLate,
        // absense: num_days - num_vacs - numAttendances - numLate
    }
    return res.status(200).json({
        status: "success",
        data: attendanceReport
    });

};

exports.UsersMonthlyReport = async (req, res, next) => {

    //get current month
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const { early_limit, late_limit } = await StaticRule.findOne();
    //get user attendance days for a given month 
    let attendance = await Attendance.findAll({
        attributes: ['user_id', [sequelize.fn('count', sequelize.col('user_id')), 'attendance_count']],
        group: ['user_id'],
        raw: true, where: { attendance_month: month, attendance_year: year, attendance_full_time: { [Op.lte]: moment(early_limit).format("YYYY-MM-DD hh:mm:ss") } }
    })
    // // console.log("🚀 ~ file: attendanceController.js ~ line 108 ~ exports.UsersMonthlyReport= ~ numAttendances", numAttendances)
    const late = await Attendance.findAll({
        attributes: ['user_id', [sequelize.fn('count', sequelize.col('user_id')), 'late_count']],
        group: ['user_id'], raw: true, where: { attendance_month: month, attendance_year: year, attendance_full_time: { [Op.and]: { [Op.lte]: moment(late_limit).format("YYYY-MM-DD hh:mm:ss"), [Op.gt]: moment(early_limit).format("YYYY-MM-DD hh:mm:ss") } } }
    });

    const users = await User.findAll({ attributes: [['id', 'user_id'], 'first_name', 'last_name'], raw: true });
    let usersAttendance = _.values(_.merge(_.keyBy(attendance, 'user_id'), _.keyBy(late, 'user_id'), _.keyBy(users, 'user_id')));
    // console.log("🚀 ~ file: attendanceController.js ~ line 116 ~ exports.UsersMonthlyReport= ~ usersAttendance", usersAttendance)
    delete usersAttendance.id
    console.log("🚀 ~ file: attendanceController.js ~ line 124 ~ exports.UsersMonthlyReport= ~  _.keyBy(late, 'user_id')", _.keyBy(attendance, 'user_id'))
    return res.status(200).json({
        status: "success",
        data: usersAttendance
    });

};

exports.UsersFullAttendanceReport = async (req, res, next) => {

    //get current month
    const now = new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    //get user attendance days for a given month 
    let attendance = await User.findAll({
        attributes: [['id','user_id'],'first_name', 'last_name', 'email', 'address'],
        include: [{
            model: Attendance,
            where: {
                attendance_month: month,
                attendance_year: year
            },
            attributes: ['attendance_full_date_time'],
        }],
        raw: true
    }
    )
    console.log("🚀 ~ file: attendanceController.js ~ line 143 ~ exports.UsersFullAttendanceReport= ~ attendance", attendance)
    return res.status(200).json({
        status: "success",
        data: attendance
    });

};

