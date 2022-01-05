/* eslint-disable import/no-anonymous-default-export */
import { USER_LOADING, USER_LOADED, EDIT_USER } from "../actions/types";

const initialState = {
  is_loading: false,
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
        isLoading: false,
        user: action.payload,
      };
    case EDIT_USER:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };

    default:
      return state;
  }
}
