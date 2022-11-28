import { combineReducers } from "redux";
import canban from "./canban/reducer";

const rootReducer = combineReducers({
  canban,
});

export default rootReducer;
