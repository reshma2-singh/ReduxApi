import { createSlice } from "@reduxjs/toolkit";
const postState={
    postList:[]
}
export const postSlice =createSlice({
    name:'post',
    initialState:postState,
    reducers:{
        postUpdate:(state,action)=>{

        },
        postInsert:(state,action)=>{
            state.postList=action.payload
        }
    }
})
export const {postUpdate,postInsert} = postSlice.actions;
export  default postSlice.reducer