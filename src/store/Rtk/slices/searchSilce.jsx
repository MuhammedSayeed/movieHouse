import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    initialState : {
        status : false
    },
    name : 'searchSlice',
    reducers : {
        changeSearchStatus : (state,action)=>{
            state.status = !state.status;
        }
    }
})

export const {changeSearchStatus} = searchSlice.actions;

export default searchSlice.reducer;