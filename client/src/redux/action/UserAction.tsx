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
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    USER_SEND_CODE_REQUEST,
    USER_SEND_CODE_SUCCESS,
    USER_SEND_CODE_FAILURE,
} from '../constants/UserConstants.tsx';

import axios from 'axios';
import { Dispatch } from 'redux';
import { CHECK_USER_FAILURE, CHECK_USER_SUCCESS, CHECK_USER_REQUEST } from '../constants/UserConstants';


export const register = (userData: any) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });

        console.log("email",userData)
        const { data } = await axios.post('/api/v1/register', userData);


        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    } catch (error: any) {
        dispatch({
            type: USER_REGISTER_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
};

export const verify = (userData: any) => async (dispatch) => {
    try {
        dispatch({ type: USER_VERIFY_REQUEST });

        const {data} = await axios.post('/api/v1/verify', userData);
        

        dispatch({ type: USER_VERIFY_SUCCESS, payload: data });
    } catch (error: any) {
        dispatch({
            type: USER_VERIFY_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
};

export const sendCode = (email: any) => async (dispatch) => {
    try {
        console.log("userEmail",email)
        dispatch({ type: USER_SEND_CODE_REQUEST });
console.log("1");
   
        const queryParams = new URLSearchParams({ email: email }).toString();
        const url = `/api/v1/send/otp?${queryParams}`;

await axios.post(url);
console.log("2");

        dispatch({ type: USER_SEND_CODE_SUCCESS, payload: true });

    } catch (error: any) {
        dispatch({
            type: USER_SEND_CODE_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
};





export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });

        const { data } = await axios.get(`/api/v1/me`);

        dispatch({ type: LOAD_USER_SUCCESS, payload: data });
    } catch (error) {
        const errorMessage = error.response && error.response.data.message ? error.response.data.message : error.message;

        dispatch({ type: LOAD_USER_FAIL, payload: errorMessage });
    }
};




// userActions.js

export const checkUser = (email) => {
    return async (dispatch) => {
        dispatch({ type: CHECK_USER_REQUEST });

        try {
            // Perform an asynchronous request to check if the user exists
            // You can use fetch, axios, or any other HTTP library here
            const { data } = await axios.post(`/api/v1/userExists`, email);


            dispatch({ type: CHECK_USER_SUCCESS, payload: data.success });
        } catch (error) {
            const errorMessage = error.response && error.response.data.message ? error.response.data.message : error.message;

            dispatch({ type: CHECK_USER_FAILURE, payload: errorMessage });
        }
    };
};










export const clearUserErrors = () => async (dispatch) => {

    dispatch({
        type: USER_CLEAR_ERRORS
    })
}

