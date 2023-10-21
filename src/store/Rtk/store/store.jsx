import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "../slices/favoriteSlice.jsx";


export const store = configureStore({
    reducer : {
        favorites : favoriteSlice
    }
})