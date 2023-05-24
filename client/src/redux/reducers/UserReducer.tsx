
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAILURE,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAILURE,
    USER_LOGOUT,
    USER_VERIFY_REQUEST,
    USER_VERIFY_SUCCESS,
    USER_VERIFY_FAILURE,
    USER_CLEAR_ERRORS,
    USER_SUCCESS_RESET,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    CHECK_USER_REQUEST,
    CHECK_USER_SUCCESS,
    CHECK_USER_FAILURE,
    USER_SEND_CODE_SUCCESS,
    USER_SEND_CODE_FAILURE,
    USER_SEND_CODE_REQUEST,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
} from '../constants/UserConstants.tsx';


const initialState = {
    user: null,
    isUser: false,
    loading: false,
    error: null,
    isLoggedIn: false,

    success: null,
    userCreated: null,
    codeSended: false,


};


//user reducer
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
        case USER_VERIFY_REQUEST:
        case USER_SEND_CODE_REQUEST:
        case LOAD_USER_REQUEST:
        case USER_LOGIN_REQUEST:
        case USER_LOGOUT_REQUEST:



            return {
                ...state,
                loading: true,

                isLoggedIn: false,

            };

        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                userCreated: true,
                success: action.payload.success,
                message: action.payload.message,
                codeSended: true,
                isUser: true,

            };

        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                user: null,
                isLoggedIn: false,
                isUser: false,
            };


        case USER_VERIFY_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                isLoggedIn: true,
                loading: false,
                codeSended: false,

            }

        case USER_SEND_CODE_SUCCESS:
            return {

                ...state,
                loading: false,
                codeSended: true,

            };
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                isLoggedIn: true,
                codeSended: false,
                error: null,
                userCreated: null,
                isUser: true,

            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                error: null,
                loading: false,
                isLoggedIn: true
            }
        case LOAD_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                userCreated: null,
                isLoggedIn: false,
                isUser: false,
                codeSended: false,
            };


        case CHECK_USER_SUCCESS:
            return {
                ...state,
                isUser: true,
            }
        case USER_SEND_CODE_FAILURE:
        case USER_REGISTER_FAILURE:
        case USER_VERIFY_FAILURE:
        case USER_LOGIN_FAILURE:
        case CHECK_USER_FAILURE:

            return {
                ...state,
                error: action.payload,
                userCreated: null,
                loading: false,
                isLoggedIn: false,
                codeSended: false,
                isUser: false,

            };
        case USER_CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};
