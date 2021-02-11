import _ from 'lodash';
import axios from "./axios";

const API_URL = "attendance/";

class AttendanceService {

    attend() {
        return axios
            .get(API_URL + "attend", {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("attendance_system_user")).token}`
                }
            })
            .then((response) => {
                const attendace = { ...response.data.data };
                return attendace;
            });
    }

    async DidattendToday() {
        const response = await axios
            .get(API_URL + "did-attended-tody", {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("attendance_system_user")).token}`
                }
            })
        return response.data;

    }

    async getUserMonthlyReport() {
        const response= await axios
            .get(API_URL + "users-monthly-report", {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("attendance_system_user")).token}`
                }
            })
        return response.data.data;
    }

    async getUserFullReport() {
        const response= await axios
            .get(API_URL + "users-full-report", {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem("attendance_system_user")).token}`
                }
            })
        return response.data.data;
    }

}

export default new AttendanceService();