
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";

export const FETCH_COURSES = 'FETCH_COURSES';
export const MAKE_COURSE = 'MAKE_COURSE';

export const fetchCourses = () => dispatch => {
    axios.get('/courses')
        .then(res => {
            dispatch({
            type: FETCH_COURSES,
            payload: res.data
            })
        });
};

export const makeCourse = (payload) => dispatch => {
    axios.post('/courses', payload)
        .then(res => {
            dispatch({
                type:MAKE_COURSE,
                payload: payload
            })
        })
};