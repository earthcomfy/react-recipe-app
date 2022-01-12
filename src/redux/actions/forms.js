import {
  ADD_CATEGORY,
  ADD_COOKTIME,
  ADD_INGREDIENTS,
  ADD_PICTURE,
  ADD_PROCEDURES,
} from "./types";

export const addIngredients = (ingredients) => {
  return {
    type: ADD_INGREDIENTS,
    payload: ingredients,
  };
};

export const addProcedures = (procedures) => {
  return {
    type: ADD_PROCEDURES,
    payload: procedures,
  };
};

export const addCooktime = (cook_time) => {
  return {
    type: ADD_COOKTIME,
    payload: cook_time,
  };
};

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    payload: category,
  };
};

export const addPicture = (picture) => {
  return {
    type: ADD_PICTURE,
    payload: picture,
  };
};
