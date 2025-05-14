import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type TFavaoriteITem = {
    id: string,
    name: string
}

export const fetchFavorite = createAsyncThunk(
    "favoriteSlice/fetchFavorite",
    async () => {
        const res = await fetch("")
        const data = await res.json()
        return data
    }
);

export const addFavorite = createAsyncThunk(
    "favoriteSlice/addFavorite",
    async (favorite) => {
        const res = await fetch("", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(favorite)
        })
        const data = await res.json();
        return data
    }
)

const favoriteSlice = createSlice({
    initialState: [] as TFavaoriteITem[],
    name: "favoriteSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFavorite.fulfilled, (_, action) => {
            return action.payload
        });
        builder.addCase(addFavorite.fulfilled, (state, action) => {
            return [...state, action.payload]
        })
    }
});


// export const { } = favoriteSlice.actions;
export default favoriteSlice.reducer