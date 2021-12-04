/* eslint-disable import/no-anonymous-default-export */
import {
  USER_LOADING,
  USER_LOADED,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
} from "../actions/types";

const initialState = {
  token: JSON.parse(localStorage.getItem("recipe")),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("recipe", JSON.stringify(action.payload.tokens));
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        token: JSON.parse(localStorage.getItem("recipe")),
      };
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem("recipe");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
