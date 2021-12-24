import {
  USER_LOADED,
  USER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  GET_ERRORS,
  CLEAR_MESSAGE,
} from "./types";
import axiosInstance from "../../utils/axios";

export const register =
  ({ username, email, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ username, email, password });

    axiosInstance
      .post("/user/register/", body, config)
      .then((res) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        dispatch({
          type: CLEAR_MESSAGE,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response,
        });
        dispatch({
          type: REGISTER_FAIL,
        });
      });
  };

export const login =
  ({ email, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    axiosInstance
      .post("/user/login/", body, config)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
        dispatch({
          type: CLEAR_MESSAGE,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response,
        });
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  };

export const logout =
  ({ refresh }) =>
  (dispatch, getState) => {
    const body = JSON.stringify({ refresh });

    axiosInstance
      .post("/user/logout/", body, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response,
        });
      });
  };

export const tokenConfig = (getState) => {
  const token = getState().auth.token.access;

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};
