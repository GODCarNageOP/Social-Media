import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userExists, userReducer } from "./redux/reducers/UserReducer";


const reducer = combineReducers({
    user: userReducer,
})

const middleware = [thunk];

const store = createStore(
    reducer,

    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;