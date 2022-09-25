import {configureStore} from "@reduxjs/toolkit";
import useReducer  from "./reducer/userSlice";
import postSlice  from "./reducer/postSlice";
import commentSlice  from "./reducer/commentSlice";

const store = configureStore({
    reducer:{
 user:useReducer,
 post:postSlice,
 comment:commentSlice,

    }
})
export default store;