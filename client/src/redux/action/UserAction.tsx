import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
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
    CHECK_USER_REQUEST,
    CHECK_USER_SUCCESS,
    CHECK_USER_FAILURE,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILURE,
} from '../constants/UserConstants';

export const register = (userData: any) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });

        const { data }: AxiosResponse = await axios.post('/api/v1/register', userData);

        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    } catch (error: any) {
        dispatch({
            type: USER_REGISTER_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
};

export const verify = (userData: any) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: USER_VERIFY_REQUEST });

        const { data }: AxiosResponse = await axios.put('/api/v1/verify', userData);

        dispatch({ type: USER_VERIFY_SUCCESS, payload: data });
    } catch (error: any) {
        dispatch({
            type: USER_VERIFY_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
};

export const sendCode = (email: any) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: USER_SEND_CODE_REQUEST });

        const queryParams = new URLSearchParams({ email }).toString();
        const url = `/api/v1/send/otp?${queryParams}`;

        await axios.post(url);

        dispatch({ type: USER_SEND_CODE_SUCCESS, payload: true });
    } catch (error: any) {
        dispatch({
            type: USER_SEND_CODE_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
};

export const loadUser = () => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });

        const { data }: AxiosResponse = await axios.get(`/api/v1/profile`);

        dispatch({ type: LOAD_USER_SUCCESS, payload: data });
    } catch (error:any) {
        const errorMessage =
            error.response && error.response.data.message ? error.response.data.message : error.message;

        dispatch({ type: LOAD_USER_FAIL, payload: errorMessage });
    }
};




//updateProfiel 
export const updateProfile = (userData:any) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: USER_UPDATE_REQUEST });

        const url = `/api/v1/edit`;
        const config = { headers: { 'Content-Type': 'application/json' } };

        const { data }: AxiosResponse = await axios.put(url, userData, config);

        dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    } catch (error: any) {
        const errorMessage =
            error.response && error.response.data.message ? error.response.data.message : error.message;

        dispatch({ type: USER_UPDATE_FAILURE, payload: errorMessage });
    }
};



//checkuser
export const checkUser = (email: any) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: CHECK_USER_REQUEST });

        try {
            const { data }: AxiosResponse = await axios.post(`/api/v1/userExists`, email);

            dispatch({ type: CHECK_USER_SUCCESS, payload: data.success });
        } catch (error:any) {
            const errorMessage =
                error.response && error.response.data.message ? error.response.data.message : error.message;

            dispatch({ type: CHECK_USER_FAILURE, payload: errorMessage });
        }
    };
};






//login user
export const loginUser = (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });

        const queryParams = new URLSearchParams({ email }).toString();

        const url = `/api/v1/login?${queryParams}`;
        const config = { headers: { 'Content-Type': 'application/json' } };

        const { data }: AxiosResponse = await axios.post(url, password, config);

        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    } catch (error:any) {
        const errorMessage =
            error.response && error.response.data.message ? error.response.data.message : error.message;

        dispatch({ type: USER_LOGIN_FAILURE, payload: errorMessage });
    }
};




//logout
export const logout = () => async (dispatch) => {
    try {
        await axios.get(`/api/v1/logout`);

        dispatch({ type: USER_LOGOUT_SUCCESS });
    } catch (error) {
        const errorMessage = error.response && error.response.data.message ? error.response.data.message : error.message;

        dispatch({ type: USER_LOGOUT_FAILURE, payload: errorMessage });
    }
};










export const clearUserErrors = () => async (dispatch: Dispatch) => {
    dispatch({
        type: USER_CLEAR_ERRORS,
    });
};
