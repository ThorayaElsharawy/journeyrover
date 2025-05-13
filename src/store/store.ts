import { configureStore } from "@reduxjs/toolkit";
import favoriteSlice from "@/store/slices/favorite-slice"
import countriesSlice from "@/store/slices/countries-slice"


export const store = configureStore({
    reducer: {
        countries: countriesSlice,
        favorite: favoriteSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch