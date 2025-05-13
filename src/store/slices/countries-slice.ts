import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk(
    "countriesSlice/fetchCountries",
    async () => {
        const response = await fetch(`https://restcountries.com/v3.1/all`)
        const data = await response.json()
        return data.slice(0,10)
    }
)

const countriesSlice = createSlice({
    initialState: [],
    name: "countriesSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.fulfilled, (_, action) => {
            return action.payload
        })
    }
})

export default countriesSlice.reducer