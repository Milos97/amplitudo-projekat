
import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const MAKE_POST = 'MAKE_POST';

export const fetchPosts = () => dispatch => {
    axios.get('/posts')
        .then(res => {
            dispatch({
            type: FETCH_POSTS,
            payload: res.data
            })
        });
};

export const makePost = (payload) => dispatch => {
    axios.post('/posts', payload)
        .then(res => {
            dispatch({
                type:MAKE_POST,
                payload: payload
            })
        })
};