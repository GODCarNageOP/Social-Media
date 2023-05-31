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
    CLEAR_FOLLOW_ERROR,
    IS_FOLLOWING_THIS_REQUEST,
    IS_FOLLOWING_THIS_SUCCESS,
    IS_FOLLOWING_THIS_FAILURE,
} from "../constants/FollwConstant";

const initialState = {
    loading: false,
    followers: [],
    following: [],
    error: null,
    isFollowed: false,
};

const followerReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER_REQUEST:
        case UNFOLLOW_USER_REQUEST:
        case GET_FOLLOWERS_REQUEST:
        case GET_FOLLOWING_REQUEST:
        case IS_FOLLOWING_THIS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FOLLOW_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                followers: [...state.followers, action.payload],
            };
        case UNFOLLOW_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                followers: state.followers.filter(
                    (follower) => follower._id !== action.payload
                ),
            };
        case GET_FOLLOWERS_SUCCESS:
            return {
                ...state,
                loading: false,
                followers: action.payload,
            };
        case GET_FOLLOWING_SUCCESS:
            return {
                ...state,
                loading: false,
                following: action.payload.following,
                followers: action.payload.followers,
            };
        case IS_FOLLOWING_THIS_SUCCESS:
            return {
                ...state,
                loading: false,
                isFollowed: action.payload,
            };
        case FOLLOW_USER_FAILURE:
        case UNFOLLOW_USER_FAILURE:
        case GET_FOLLOWERS_FAILURE:
        case GET_FOLLOWING_FAILURE:
        case IS_FOLLOWING_THIS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default followerReducer;
