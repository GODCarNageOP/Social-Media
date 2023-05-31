import axios from "axios";
import {
    FOLLOW_USER_REQUEST,
    FOLLOW_USER_SUCCESS,
    FOLLOW_USER_FAILURE,
    UNFOLLOW_USER_REQUEST,
    UNFOLLOW_USER_SUCCESS,
    UNFOLLOW_USER_FAILURE,
    GET_FOLLOWERS_REQUEST,
    GET_FOLLOWERS_SUCCESS,
    GET_FOLLOWERS_FAILURE,
    GET_FOLLOWING_REQUEST,
    GET_FOLLOWING_SUCCESS,
    GET_FOLLOWING_FAILURE,
    IS_FOLLOWING_THIS_REQUEST,
    IS_FOLLOWING_THIS_SUCCESS,
    IS_FOLLOWING_THIS_FAILURE,
    CLEAR_FOLLOW_ERROR,
} from "../constants/FollwConstant";

// Follow a user
export const followUser = (userId) => async (dispatch) => {
    try {
        dispatch({ type: FOLLOW_USER_REQUEST });

        // Make API request to follow the user
        const { data } = await axios.post(`/api/v1/follow/${userId}`);

        dispatch({ type: FOLLOW_USER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: FOLLOW_USER_FAILURE,
            payload: error.response?.data.message || error.message,
        });
    }
};

// Unfollow a user
export const unfollowUser = (userId) => async (dispatch) => {
    try {
        dispatch({ type: UNFOLLOW_USER_REQUEST });

        // Make API request to unfollow the user
        const { data } = await axios.delete(`/api/v1/unfollow/${userId}`);

        dispatch({ type: UNFOLLOW_USER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: UNFOLLOW_USER_FAILURE,
            payload: error.response?.data.message || error.message,
        });
    }
};

// Get all followers
export const getFollowers = () => async (dispatch) => {
    try {
        dispatch({ type: GET_FOLLOWERS_REQUEST });

        // Make API request to get followers
        const { data } = await axios.get("/api/v1/followers");

        dispatch({ type: GET_FOLLOWERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: GET_FOLLOWERS_FAILURE,
            payload: error.response?.data.message || error.message,
        });
    }
};

// Get all following users
export const getFollowing = () => async (dispatch) => {
    try {
        dispatch({ type: GET_FOLLOWING_REQUEST });

        // Make API request to get following users
        const { data } = await axios.get("/api/v1/following");

        dispatch({ type: GET_FOLLOWING_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: GET_FOLLOWING_FAILURE,
            payload: error.response?.data.message || error.message,
        });
    }
};

// Check if following a user
export const checkFollow = (followId) => async (dispatch) => {
    try {
        dispatch({ type: IS_FOLLOWING_THIS_REQUEST });

        // Make API request to check if following the user
        const { data } = await axios.get(`/api/v1/follow/${followId}`);

        dispatch({ type: IS_FOLLOWING_THIS_SUCCESS, payload: data.isFollowing });
    } catch (error) {
        dispatch({
            type: IS_FOLLOWING_THIS_FAILURE,
            payload: error.response?.data.message || error.message,
        });
    }
};

// Clear follow error
export const clearFollowError = () => ({ type: CLEAR_FOLLOW_ERROR });
