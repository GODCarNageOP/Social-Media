import { CLEAR_LIKE_ERROR } from '../constants/LikeConsants';
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

interface LikeState {
    loading: boolean;
    error: string | null;
    personalLikes: any[]; // Adjust the type based on your actual data structure
}

const initialState: LikeState = {
    loading: false,
    error: null,
    personalLikes: [],
};

export const likeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_LIKE_REQUEST:
        case DELETE_LIKE_REQUEST:
        case GET_PERSONAL_LIKES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ADD_LIKE_SUCCESS:
            return {
                ...state,
                loading: false,
                personalLikes: [...state.personalLikes, action.payload],
            };
        case DELETE_LIKE_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case GET_PERSONAL_LIKES_SUCCESS:
            return {
                ...state,
                loading: false,
                personalLikes: action.payload,
            };
            case CLEAR_LIKE_ERROR:
                return {
                    ...state,
                    error:null
                }
        case ADD_LIKE_FAILURE:
        case DELETE_LIKE_FAILURE:
        case GET_PERSONAL_LIKES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
