import { CLEAR_TWEET_ERRORS, UPDATE_LIKES_FAILURE, UPDATE_LIKES_REQUEST, UPDATE_LIKES_SUCCESS } from '../constants/TweetConstants';
import {
    CREATE_TWEET_REQUEST,
    CREATE_TWEET_SUCCESS,
    CREATE_TWEET_FAILURE,
    UPDATE_TWEET_REQUEST,
    UPDATE_TWEET_SUCCESS,
    UPDATE_TWEET_FAILURE,
    DELETE_TWEET_REQUEST,
    DELETE_TWEET_SUCCESS,
    DELETE_TWEET_FAILURE,
    FETCH_PERSONAL_TWEETS_REQUEST,
    FETCH_PERSONAL_TWEETS_SUCCESS,
    FETCH_PERSONAL_TWEETS_FAILURE,
    FETCH_ALL_TWEETS_REQUEST,
    FETCH_ALL_TWEETS_SUCCESS,
    FETCH_ALL_TWEETS_FAILURE,
    FETCH_OTHER_TWEETS_REQUEST,
    FETCH_OTHER_TWEETS_SUCCESS,
    FETCH_OTHER_TWEETS_FAILURE,
} from '../constants/TweetConstants';

const initialState = {
    loading: false,
    error: null,
    allTweets:[],
    personalTweets: [],


};

export const tweetReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TWEET_REQUEST:
        case UPDATE_TWEET_REQUEST:
        case DELETE_TWEET_REQUEST:
        case FETCH_PERSONAL_TWEETS_REQUEST:
        case FETCH_ALL_TWEETS_REQUEST:
        case FETCH_OTHER_TWEETS_REQUEST:
        case UPDATE_LIKES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,

            };
        case CREATE_TWEET_SUCCESS:
            return {
                ...state,
                loading: false,
                personalTweets: action.payload,


            };
        case UPDATE_LIKES_SUCCESS:
            return {
                ...state,
                loading: false,



            };
        case UPDATE_TWEET_SUCCESS:
            return {
                ...state,
                loading: false,
                personalTweets: state.personalTweets.map((tweet) =>
                    tweet.id === action.payload.id ? action.payload : tweet
                ),
            };
        case DELETE_TWEET_SUCCESS:
            return {
                ...state,
                loading: false,
                personalTweets: state.personalTweets.filter(
                    (tweet) => tweet.id !== action.payload
                ),
            };
        case FETCH_PERSONAL_TWEETS_SUCCESS:
            return {
                ...state,
                loading: false,
                personalTweets: action.payload,
            };
        case FETCH_ALL_TWEETS_SUCCESS:
            return {
                ...state,
                loading: false,
                allTweets: action.payload,
            };
        case FETCH_OTHER_TWEETS_SUCCESS:
            return {
                ...state,
                loading: false,
                otherTweets: action.payload,
            };
        case CREATE_TWEET_FAILURE:
        case UPDATE_TWEET_FAILURE:
        case DELETE_TWEET_FAILURE:
        case FETCH_PERSONAL_TWEETS_FAILURE:
        case FETCH_ALL_TWEETS_FAILURE:
        case FETCH_OTHER_TWEETS_FAILURE:
        case UPDATE_LIKES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case CLEAR_TWEET_ERRORS:
            return {
                ...state,
                error: null,
                loading: false,
            }
        default:
            return state;
    }
};
