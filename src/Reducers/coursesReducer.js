import {FETCH_COURSES, FETCH_COURSE, MAKE_COURSE} from "Actions/coursesAction";

const initialState = {
    courses: [],
    course: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_COURSES:
            return{
                ...state,
                courses: action.payload
            };
        // case FETCH_COURSE:
        //     return{
        //         ...state,
        //         course: action.payload
        //     };
        case MAKE_COURSE:
            return {
                ...state,
                courses: [...state.courses, action.payload]
            };
        default:
            return state;
    }
}