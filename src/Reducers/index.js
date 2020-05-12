import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import coursesReducer from "./coursesReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    kursevi: coursesReducer
});

export default allReducers;