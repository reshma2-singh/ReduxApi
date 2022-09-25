import { createSlice } from "@reduxjs/toolkit";
const commentState={
    commentList:[]
}
export const commentSlice= createSlice({
name:'comment',
initialState:commentState,
reducers:{
commentUpdate:(state,action)=>{

},
commentInsert:(state,action)=>{
    state.commentList=action.payload
}
}
})
export const {commentUpdate,commentInsert} = commentSlice.actions;
export default commentSlice.reducer;