import { combineReducers } from "redux";
import authReducer from "./reducers/auth";
import movieCreater from "./reducers/moviecreater";

const rootReducer = combineReducers({
  auth: authReducer,
  movieCreater,
});
export default rootReducer;
