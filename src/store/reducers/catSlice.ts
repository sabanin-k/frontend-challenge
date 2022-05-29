import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "..";
import { ICat } from "../../types";

export const fetchCats = createAsyncThunk(
    'cats/fetchCats',
    async (index, thunkAPI) => {
        try {
            const res = await axios.get<ICat[]>(`https://api.thecatapi.com/v1/images/search?size=small&limit=15&page=${index}&order=desc`)
            return res.data            
        } catch (error) {
            return thunkAPI.rejectWithValue('Ошибка загрузки данных с сервера!')
        }
    }
)

const catSlice = createSlice({
    name: 'cats',
    initialState: {
        isInitialized: false,
        cats: [] as ICat[],
        favCats: [] as string[],
        pageIndex: 0,
        isLoading: false,
        fetchingError: ''
    },
    reducers: {
        setInitialization: (state) => {
            state.isInitialized = true
        },
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
            state.isLoading = false
            state.isInitialized = true
            state.cats = [...state.cats, ...action.payload]
        },
        [fetchCats.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchCats.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.fetchingError = action.payload
        }
    }
})

export const selectInitialization = (state: RootState) => state.catReducer.isInitialized
export const selectPageIndex = (state: RootState) => state.catReducer.pageIndex
export const selectCats = (state: RootState) => state.catReducer.cats
export const selectFavCats = (state: RootState) => state.catReducer.favCats
export const selectLoading = (state: RootState) => state.catReducer.isLoading
export const selectFetchingError = (state: RootState) => state.catReducer.fetchingError

export const {
    setInitialization,
    increasePageIndex,
    addCatToFavourites
} = catSlice.actions

export const catReducer = catSlice.reducer