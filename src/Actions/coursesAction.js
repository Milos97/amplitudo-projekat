import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";

export const FETCH_COURSES = 'FETCH_COURSES';
export const MAKE_COURSE = 'MAKE_COURSE';
export const FETCH_COURSE = 'FETCH_COURSE';

// let id = "id=1";
let id = ""; 

export const fetchCourses = () => dispatch => {
    axios.get(`/design?${id}`) 
        .then(res => {
            dispatch({
            type: FETCH_COURSES,
            payload: res.data
            })
        });
};

export const fetchCourse = () => dispatch => {
    axios.get(`/design?id=1`)
        .then(res => {
            dispatch({
            type: FETCH_COURSE,
            payload: res.data
            })
        });
};

export const makeCourse = (payload) => dispatch => {
    axios.post('/design', payload)
        .then(res => {
            dispatch({
                type:MAKE_COURSE,
                payload: payload
            })
        })
};