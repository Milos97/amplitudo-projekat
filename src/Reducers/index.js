import coursesReducer from "./coursesReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    kursevi: coursesReducer
});

export default allReducers;