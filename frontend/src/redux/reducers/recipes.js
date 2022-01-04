/* eslint-disable import/no-anonymous-default-export */
import {
  RECIPE_LOADING,
  GET_RECIPES,
  GET_DETAIL_RECIPE,
  CLEAR_RECIPE,
  CREATE_RECIPE,
  LIKE_RECIPE,
  EDIT_RECIPE,
  DELETE_RECIPE,
  SAVE_RECIPE,
} from "../actions/types";

const initialState = {
  is_loading: false,
  recipes: null,
  detailRecipe: null,
  likedRecipe: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RECIPE_LOADING:
      return {
        ...state,
        is_loading: true,
      };
    case GET_RECIPES:
      return {
        ...state,
        is_loading: false,
        recipes: action.payload,
      };
    case GET_DETAIL_RECIPE:
      return {
        ...state,
        is_loading: false,
        detailRecipe: action.payload,
      };
    case CLEAR_RECIPE:
      return {
        ...state,
        is_loading: false,
        recipes: null,
      };
    case CREATE_RECIPE:
      return {
        ...state,
        is_loading: false,
      };
    case EDIT_RECIPE:
      return {
        ...state,
        is_loading: false,
      };
    case LIKE_RECIPE:
      return {
        ...state,
        is_loading: false,
        likedRecipe: action.payload,
      };
    case DELETE_RECIPE:
      return {
        ...state,
        is_loading: false,
      };
    case SAVE_RECIPE:
      return {
        ...state,
        is_loading: false,
      };
    default:
      return state;
  }
}
