import { combineReducers } from "redux";
import auth from "./auth";
import errors from "./errors";
import messages from "./messages";
import recipes from "./recipes";
import forms from "./forms";
import user from "./user";

export default combineReducers({
  auth,
  errors,
  messages,
  recipes,
  forms,
  user,
});
