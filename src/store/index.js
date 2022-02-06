import { combineReducers } from "redux";
import user from "./modules/user";
import admin from "./modules/admin";

const rootReducer = combineReducers({
  user,
  admin,
});

export default rootReducer;
