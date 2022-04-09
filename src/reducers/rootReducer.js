import { combineReducers } from "redux";
import yearReducer from "./yearReducer";

const rootReducer = combineReducers({
    years: yearReducer
});

export default rootReducer