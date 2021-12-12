/* eslint-disable import/no-anonymous-default-export */
import {
  RECIPE_LOADING,
  GET_RECIPES,
  GET_DETAIL_RECIPE,
  CLEAR_RECIPE,
} from "../actions/types";

const initialState = {
  is_loading: false,
  recipes: null,
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
        recipes: action.payload,
      };
    case CLEAR_RECIPE:
      return {
        ...state,
        is_loading: false,
        recipes: null,
      };
    default:
      return state;
  }
}
