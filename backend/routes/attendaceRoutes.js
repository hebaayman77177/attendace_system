
const express = require("express");
const attendanceController = require("../controllers/attendanceController");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/attend").get(authController.authMiddleware,attendanceController.takeAttendance);
router.route("/did-attended-tody").get(authController.authMiddleware,attendanceController.DidAttendToday);
router.route("/monthly-report").get(authController.authMiddleware,attendanceController.UserMonthlyReport);
router.route("/users-monthly-report").get(authController.authMiddleware,attendanceController.UsersMonthlyReport);
router.route("/users-full-report").get(authController.authMiddleware,attendanceController.UsersFullAttendanceReport);
module.exports = router;