import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userExists, userReducer } from "./redux/reducers/UserReducer";
import { tweetReducer } from "./redux/reducers/TweetReducers";
import { likeReducer } from "./redux/reducers/LikeReducers";
import followerReducer from "./redux/reducers/FollowReducer";
import { trendingReducer } from "./redux/reducers/TrendingReducer";
import { bookmarkReducer } from "./redux/reducers/BookmarReducer";


const reducer = combineReducers({
    user: userReducer,
    tweets: tweetReducer,
    likes:likeReducer,
    follow:followerReducer,
    trending:trendingReducer,
    bookmark: bookmarkReducer

})

const middleware = [thunk];

const store = createStore(
    reducer,

    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;