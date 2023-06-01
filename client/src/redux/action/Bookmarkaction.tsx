// bookmarkActions.js

import axios from 'axios';
import { GET_BOOKMARKS_SUCCESS, GET_BOOKMARKS_FAILURE } from '../constants/BookmarkConstants';
import {
    ADD_BOOKMARK_REQUEST,
    ADD_BOOKMARK_SUCCESS,
    ADD_BOOKMARK_FAILURE,
    DELETE_BOOKMARK_REQUEST,
    DELETE_BOOKMARK_SUCCESS,
    DELETE_BOOKMARK_FAILURE,
    CLEAR_BOOKMARKS,
    GET_BOOKMARKS_REQUEST,
} from '../constants/BookmarkConstants';

export const addBookmark = (postId) => async (dispatch) => {
    try {
        dispatch({ type: ADD_BOOKMARK_REQUEST });

        const { data } = await axios.post('/api/v1/bookmark', { postId });

        dispatch({ type: ADD_BOOKMARK_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ADD_BOOKMARK_FAILURE, payload: error.response?.data.message || error.message });
    }
};

export const deleteBookmark = (postId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_BOOKMARK_REQUEST });

        const { data } = await axios.delete(`/api/v1/bookmark`, { postId });

        dispatch({ type: DELETE_BOOKMARK_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELETE_BOOKMARK_FAILURE, payload: error.response?.data.message || error.message });
    }
};


export const getBookmarks = () => async (dispatch) => {
    try {
        dispatch({ type: GET_BOOKMARKS_REQUEST });

        const { data } = await axios.get(`/api/v1/bookmark/me`,);

        dispatch({ type: GET_BOOKMARKS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_BOOKMARKS_FAILURE, payload: error.response?.data.message || error.message });
    }
};



export const clearErrorBookmarks = () => async (dispatch) => {
    dispatch({
        type: CLEAR_BOOKMARKS
    })

}