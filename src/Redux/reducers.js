import { combineReducers } from "redux";

import authUser from "./auth/reducers";
import menu from "./menu/reducer";

import settings from "./settings/reducer";


const reducers = combineReducers({
  menu,
  authUser,
  settings

});

export default reducers;
