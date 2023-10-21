import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    initialState : {
        favorites : []
    },
    name :'favoriteSlice',
    reducers : {
        addToFavorite : (state,action)=>{
            state.favorites = [...state.favorites , action.payload];
        },
        removeFromFavorite : (state,action) =>{
            state.favorites = state.favorites.filter((id) => id != action.payload);
        }
    }
})

export const {addToFavorite,removeFromFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;