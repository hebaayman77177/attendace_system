import {
  ATTEND,
  DID_ATTEND_TODAY
} from "../actions/types";

const initialState = {
  didAttend: false,
  attendance: {
    attendace_date: '',
    attendace_time: ''
  }
}

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case DID_ATTEND_TODAY:
      return {
        ...state,
        didAttend:payload.didAttend,
        attendance: payload.attendance
      };
    default:
      return state;
  }
}


