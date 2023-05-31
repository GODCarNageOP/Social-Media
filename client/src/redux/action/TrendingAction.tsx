// trendingActions.js
import axios from 'axios';
import {
    GET_TRENDING_REQUEST,
    GET_TRENDING_SUCCESS,
    GET_TRENDING_FAILURE,
    GET_TRENDING_BY_CHOICES_REQUEST,
    GET_TRENDING_BY_CHOICES_SUCCESS,
    GET_TRENDING_BY_CHOICES_FAILURE,
} from '../constants/TrendingConstants';


export const getTrending = () => async (dispatch) => {
    try {
        dispatch({ type: GET_TRENDING_REQUEST });

        const { data } = await axios.get('/api/v1/trending');

        dispatch({ type: GET_TRENDING_SUCCESS, payload: data.trendingItems });
    } catch (error) {
        dispatch({ type: GET_TRENDING_FAILURE, payload: error.message });
    }
};

export const getTrendingByChoices = (choices) => async (dispatch) => {
    try {
        dispatch({ type: GET_TRENDING_BY_CHOICES_REQUEST });

        const { data } = await axios.get(`/api/v1/trending/${choices}`);

        dispatch({ type: GET_TRENDING_BY_CHOICES_SUCCESS, payload: data.trendingItems });
    } catch (error) {
        dispatch({ type: GET_TRENDING_BY_CHOICES_FAILURE, payload: error.message });
    }
};
