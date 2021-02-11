import history from "../history";
import {
    DID_ATTEND_TODAY
} from "./types";

import AttendanceService from "../services/attendance.service";

// export const attend = () => (dispatch) => {
//     return AttendanceService.attend().then(
//         (response) => {
//             dispatch({
//                 type: ATTEND,
//             });
//             return Promise.resolve();
//         },
//         (error) => {

//             dispatch({
//                 type: ATTEND_FAIL,
//             });
//             return Promise.reject();
//         }
//     );
// };


export const DidattendToday = () => async (dispatch) => {
    const response = await AttendanceService.DidattendToday();
    console.log("dddddddddddddidddddddddddddddd", response)
    dispatch({
        type: DID_ATTEND_TODAY,
        payload: {
            didAttend: response.data.didAttend,
            attendance: response.data.attendance
        }
    });
}

