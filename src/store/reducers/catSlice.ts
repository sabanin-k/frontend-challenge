import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { ICat } from "../../types";

export const fetchCats = createAsyncThunk(
    'cats/fetchCats',
    async (index) => {
        const res = await axios.get<ICat[]>(`https://api.thecatapi.com/v1/images/search?size=small&limit=15&page=${index}&order=desc`)
        return res.data
    }
)

const catSlice = createSlice({
    name: 'cats',
    initialState: {
        cats: [] as ICat[],
        favCats: [] as string[],
        pageIndex: 0
    },
    reducers: {
        increasePageIndex: (state) => {
            state.pageIndex = state.pageIndex + 1
        },
        addCatToFavourites: (state, action: PayloadAction<string>) => {
            state.favCats.includes(action.payload)
            ? state.favCats = state.favCats.filter(id => id !== action.payload)
            : state.favCats.push(action.payload)
        }
    },
    extraReducers: {
        [fetchCats.fulfilled.type]: (state, action: PayloadAction<ICat[]>) => {
            state.cats = [...state.cats, ...action.payload]
        }
    }
})

export const selectPageIndex = (state: RootState) => state.catReducer.pageIndex
export const selectCats = (state: RootState) => state.catReducer.cats
export const selectFavCats = (state: RootState) => state.catReducer.favCats

export const {
    increasePageIndex,
    addCatToFavourites
} = catSlice.actions

export const catReducer = catSlice.reducer