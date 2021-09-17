import { combineReducers } from "redux";

import authUser from "./auth/reducers";
import settings from "./settings/reducer";


const reducers = combineReducers({

  authUser,
  settings

});

export default reducers;
