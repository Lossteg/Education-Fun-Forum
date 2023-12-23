import { combineReducers } from "redux";

import authReducer from "./auth";
import adminReducer from "./admin";
import userReducer from "./user";
import postsReducer from "./posts";
import communityReducer from "./community";

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    user: userReducer,
    posts: postsReducer,
    community: communityReducer,
});

export default rootReducer;