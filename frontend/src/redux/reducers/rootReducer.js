import { combineReducers } from "redux";
import auth from "./auth";
import errors from "./errors";
import messages from "./messages";
import recipes from "./recipes";

export default combineReducers({
  auth,
  errors,
  messages,
  recipes,
});
