import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "../slices/favoriteSlice.jsx";
import statusSlice from "../slices/statusSlice.jsx";
import searchSlice from "../slices/searchSilce.jsx";


export const store = configureStore({
    reducer : {
        favorites : favoriteSlice,
        status : statusSlice,
        search : searchSlice
    }
})