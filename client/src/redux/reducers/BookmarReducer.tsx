import { GET_BOOKMARKS_FAILURE, GET_BOOKMARKS_REQUEST, GET_BOOKMARKS_SUCCESS } from '../constants/BookmarkConstants';
// bookmarkReducer.js

import {
    ADD_BOOKMARK_REQUEST,
    ADD_BOOKMARK_SUCCESS,
    ADD_BOOKMARK_FAILURE,
    DELETE_BOOKMARK_REQUEST,
    DELETE_BOOKMARK_SUCCESS,
    DELETE_BOOKMARK_FAILURE,
    CLEAR_BOOKMARKS,
} from '../constants/BookmarkConstants';

let initialState = {
    loading: false,
    error: null,
    bookmarks: []
}
export const bookmarkReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKMARK_REQUEST:
        case DELETE_BOOKMARK_REQUEST:
        case GET_BOOKMARKS_REQUEST:

            return { ...state, loading: true };

        case ADD_BOOKMARK_SUCCESS:
        case DELETE_BOOKMARK_SUCCESS:

            return { ...state, loading: false };
        case GET_BOOKMARKS_SUCCESS:
            return {
                ...state,
                laoding: false,
                bookmarks: action.payload.bookmarks
            }
        case ADD_BOOKMARK_FAILURE:
        case DELETE_BOOKMARK_FAILURE:
        case GET_BOOKMARKS_FAILURE:

            return { ...state, loading: false, error: action.payload };

        case CLEAR_BOOKMARKS:
            return { ...state, loading: false, error: null }
        default:
            return state;
    }
};
