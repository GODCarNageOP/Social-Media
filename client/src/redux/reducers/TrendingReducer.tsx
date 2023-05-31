// trendingReducers.js
import {
    GET_TRENDING_REQUEST,
    GET_TRENDING_SUCCESS,
    GET_TRENDING_FAILURE,
    GET_TRENDING_BY_CHOICES_REQUEST,
    GET_TRENDING_BY_CHOICES_SUCCESS,
    GET_TRENDING_BY_CHOICES_FAILURE,
} from '../constants/TrendingConstants';

// let intialState

export const trendingReducer = (state = { trendingItems: [] }, action) => {
    switch (action.type) {
        case GET_TRENDING_REQUEST:
        case GET_TRENDING_BY_CHOICES_REQUEST:
            return { loading: true, trendingItems: [] };

        case GET_TRENDING_SUCCESS:
        case GET_TRENDING_BY_CHOICES_SUCCESS:
            return { loading: false, trendingItems: action.payload };

        case GET_TRENDING_FAILURE:
        case GET_TRENDING_BY_CHOICES_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
