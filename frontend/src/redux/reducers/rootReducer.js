import { combineReducers } from "redux";
import auth from "./auth";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  auth,
  errors,
  messages,
});
