import { CREATE_MESSAGE, CLEAR_MESSAGE, GET_ERRORS } from "./types";

export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg,
  };
};

export const clearMessage = (msg) => {
  return {
    type: CLEAR_MESSAGE,
    payload: msg,
  };
};

export const getErrors = (msg) => {
  return {
    type: GET_ERRORS,
    payload: msg,
  };
};
