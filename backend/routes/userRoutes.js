
const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/sign-up").post(authController.signUp);
router.route("/log-in").post(authController.logIn);

module.exports = router;