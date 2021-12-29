import { combineReducers } from "redux";
import auth from "./auth";
import errors from "./errors";
import messages from "./messages";
import recipes from "./recipes";
import forms from "./forms";

export default combineReducers({
  auth,
  errors,
  messages,
  recipes,
  forms,
});
