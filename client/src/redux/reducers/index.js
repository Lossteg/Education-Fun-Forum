import { combineReducers } from "redux";

import authReducer from "./auth";
import adminReducer from "./admin";
import postsReducer from "./posts";

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    posts: postsReducer,
});

export default rootReducer;