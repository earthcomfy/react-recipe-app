/* eslint-disable import/no-anonymous-default-export */
import {
  USER_LOADING,
  USER_LOADED,
  EDIT_USER,
  CHANGE_PASSWORD,
  GET_SAVED_RECIPES,
  GET_USER_RECIPES,
  CHANGE_AVATAR,
  GET_AVATAR,
} from "../actions/types";

const initialState = {
  is_loading: false,
  user: null,
  savedRecipes: null,
  userRecipes: null,
  avatar: null,
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
    case CHANGE_PASSWORD:
      return {
        ...state,
        isLoading: false,
      };
    case GET_SAVED_RECIPES:
      return {
        ...state,
        isLoading: false,
        savedRecipes: action.payload,
      };
    case GET_USER_RECIPES:
      return {
        ...state,
        isLoading: false,
        userRecipes: action.payload,
      };
    case GET_AVATAR:
      return {
        ...state,
        isLoading: false,
        avatar: action.payload,
      };
    case CHANGE_AVATAR:
      return {
        ...state,
        isLoading: false,
        avatar: action.payload,
      };

    default:
      return state;
  }
}
