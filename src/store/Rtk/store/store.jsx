import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "../slices/favoriteSlice.jsx";
import statusSlice from "../slices/statusSlice.jsx";


export const store = configureStore({
    reducer : {
        favorites : favoriteSlice,
        status : statusSlice
    }
})