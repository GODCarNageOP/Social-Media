import axios from "axios";
import {
    ADD_LIKE_REQUEST,
    ADD_LIKE_SUCCESS,
    ADD_LIKE_FAILURE,
    DELETE_LIKE_REQUEST,
    DELETE_LIKE_SUCCESS,
    DELETE_LIKE_FAILURE,
    GET_PERSONAL_LIKES_REQUEST,
    GET_PERSONAL_LIKES_SUCCESS,
    GET_PERSONAL_LIKES_FAILURE,
} from "../constants/LikeConsants.tsx";

import { Dispatch } from "redux";

// Add a like
export const addLike = (postId: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: ADD_LIKE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            "/api/v1/like",
            { postId },
            config
        );

        dispatch({ type: ADD_LIKE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ADD_LIKE_FAILURE,
            payload: error.response.data.error,
        });
    }
};

// Delete a like
export const deleteLike = (postId: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: DELETE_LIKE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            "/api/v1/like",
            { postId },
            config
        );
        dispatch({ type: DELETE_LIKE_SUCCESS });
    } catch (error) {
        dispatch({
            type: DELETE_LIKE_FAILURE,
            payload: error.response.data.error,
        });
    }
};

// Get personal likes
export const getPersonalLikes = (userId: string) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: GET_PERSONAL_LIKES_REQUEST });

        const { data } = await axios.get(`/api/v1/like/me`);

        dispatch({ type: GET_PERSONAL_LIKES_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: GET_PERSONAL_LIKES_FAILURE,
            payload: error.response.data.error,
        });
    }
};
