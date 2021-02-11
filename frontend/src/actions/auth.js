import history from "../history";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from "./types";

import AuthService from "../services/auth.service";

export const register = (firstName, lastName, email, address, age, password) => (dispatch) => {
  return AuthService.register(firstName, lastName, email, address, age, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      return Promise.resolve();
    },
    (error) => {

      dispatch({
        type: REGISTER_FAIL,
      });
      return Promise.reject();
    }
  );
};

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      history.push("/home");
      return Promise.resolve();
    },
    (error) => {
      dispatch({
        type: LOGIN_FAIL,
      });


      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch, getState) => {
  const state = getState();
  const email = state.auth.user.email;
  AuthService.logout(email);
  console.log(email);

  dispatch({
    type: LOGOUT,
  });
  history.push("/login");
};

export const takeAttendace = (dispatch) => {

};
