import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
    initialState : {
        status : true
    },
    name : 'statusSlice',
    reducers : {
        changeStatus : (state,action)=>{
            state.status = !state.status;
        }
    }
})

export const {changeStatus} = statusSlice.actions;

export default statusSlice.reducer;