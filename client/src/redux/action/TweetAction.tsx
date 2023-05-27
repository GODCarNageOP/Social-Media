import axios from 'axios';
import { Dispatch } from 'redux';
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
    CLEAR_TWEET_ERRORS
} from '../constants/TweetConstants';

export interface TweetData {
    content: string;
    image: string[];
    
    
}


// Create a personal tweet
export const writeTweet = (tweetData: TweetData) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: CREATE_TWEET_REQUEST });

        const { data } = await axios.post('/api/v1/tweets', tweetData);

        dispatch({ type: CREATE_TWEET_SUCCESS, payload: data });
    } catch (error: any) {

        const errorMessage =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        dispatch({ type: CREATE_TWEET_FAILURE, payload: errorMessage });
    }
};

// Update a personal tweet
export const updateTweet = (tweetId: string, tweetData: TweetData) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: UPDATE_TWEET_REQUEST });

        const { data } = await axios.put(`/api/v1/tweets/${tweetId}`, tweetData);

        dispatch({ type: UPDATE_TWEET_SUCCESS, payload: data });
    } catch (error: any) {

        const errorMessage =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        dispatch({ type: UPDATE_TWEET_FAILURE, payload: errorMessage });
    }
};

// Delete a personal tweet
export const deleteTweet = (id) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: DELETE_TWEET_REQUEST });


        console.log(`deleting`, id)
    //    const deletes= await axios.delete(`/api/v1/tweet/delete`,id);
        const { data } = await axios.delete(`/api/v1/tweet/${id}`);

        dispatch({ type: DELETE_TWEET_SUCCESS, payload:data?.message});
    } catch (error: any) {

        const errorMessage =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        dispatch({ type: DELETE_TWEET_FAILURE, payload: errorMessage });
    }
};

// Fetch personal tweets
export const fetchPersonalTweets = () => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: FETCH_PERSONAL_TWEETS_REQUEST });

        const { data } = await axios.get('/api/v1/my/tweets');

        dispatch({ type: FETCH_PERSONAL_TWEETS_SUCCESS, payload: data });
    } catch (error: any) {

        const errorMessage =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        dispatch({ type: FETCH_PERSONAL_TWEETS_FAILURE, payload: errorMessage });
    }
};

// Fetch all tweets
export const fetchAllTweets = () => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: FETCH_ALL_TWEETS_REQUEST });

        const { data } = await axios.get('/api/v1/tweets/all');

        dispatch({ type: FETCH_ALL_TWEETS_SUCCESS, payload: data.tweets });
    } catch (error: any) {

        const errorMessage =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        dispatch({ type: FETCH_ALL_TWEETS_FAILURE, payload: errorMessage });
    }
};

// Fetch other tweets
export const fetchOtherTweets = (userId:string) => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: FETCH_OTHER_TWEETS_REQUEST });

        const { data } = await axios.get(`/api/v1/tweets/${userId}`);

        dispatch({ type: FETCH_OTHER_TWEETS_SUCCESS, payload: data });
    } catch (error: any) {
        const errorMessage =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        dispatch({ type: FETCH_OTHER_TWEETS_FAILURE, payload: errorMessage });
    }
};



// Clear tweets Errors
export const clearTweetsError = () => async (dispatch: Dispatch) => {
    dispatch({
        type: CLEAR_TWEET_ERRORS,
    });
};
