import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_USER } from '../actions/types';
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    user: null,
    loading: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        default: {
            return state;
        };
        case USER_LOADED:
            return {
                ...state,
                loading: false,
                user: action.payload,
                isAuthenticated: true
            }
        case USER_LOADING:
            return {
                ...state,
                loading: true
            }
        case AUTH_ERROR:
            localStorage.removeItem("token")
            return {
                ...state,
                token: null,
                loading: false,
                user: null,
                isAuthenticated: false
            }
        case LOGIN_FAIL:
            localStorage.removeItem("token")
            return {
                ...state,
                token: null,
                loading: false,
                user: null,
                isAuthenticated: false
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                loading: false,
                isAuthenticated: true
            }
        case LOGOUT_USER:
            localStorage.removeItem("token");
            return {
                ...state,
                loading: false,
                user: null,
                isAuthenticated: false
            }
    }
}