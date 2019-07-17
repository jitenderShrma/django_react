import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_USER } from '../actions/types';
import axios from 'axios';

// Check Token & Load User
export const loadUser = () => (dispatch, getState) => {
    // LoadUser
    dispatch({ type: USER_LOADING });

    // Get Token from state
    const token = getState().auth.token;

    // Header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    axios.get('/api/auth/user', config)
        .then(res => {
            dispatch({ type: USER_LOADED, payload: res.data })
        })
        .catch(error => dispatch({ type: AUTH_ERROR, payload: error.response.data }));
}

// Login User
export const login = (username, password) => dispatch => {
    //console.log(username, password);
    // Header
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Header body
    const body = JSON.stringify({ username, password })
    axios.post('/api/auth/login', body, config)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data })
        })
        .catch(error => dispatch({ type: LOGIN_FAIL, payload: error.response.data }));
}


// Logout User
export const logout = () => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    config.headers['Authorization'] = `Token ${localStorage.getItem('token')}`;
    axios.get('/api/auth/logout', config)
        .then(() => {
            dispatch({ type: LOGOUT_USER, payload: null });
        })
        .catch(error => dispatch({ type: LOGIN_FAIL, payload: error.response.data }));
}