import { EDIT_USER, GET_ERRORS, USER_LOADED, USER_LOADING } from "./types";
import axiosInstance from "../../utils/axios";
import { tokenConfig } from "./auth";

export const loadUser = (user_id) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axiosInstance
    .get(`/user/${user_id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const editUser = (user_id, username, email) => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  const body = JSON.stringify({ username, email });

  axiosInstance
    .put(`/user/${user_id}/`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: EDIT_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};
