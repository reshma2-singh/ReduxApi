import { createSlice } from "@reduxjs/toolkit";
const userState={
    user:[]
}
export const userSlice= createSlice({
    name:'user',
    initialState:userState,
    reducers:{
        userUpdate:(state,action)=>{

        },
        userInsert:(state,action)=>{
            state.user=action.payload
        }
    }
})
export const {userUpdate,userInsert}=userSlice.actions;
export default userSlice.reducer;