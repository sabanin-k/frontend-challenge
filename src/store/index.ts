import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { catReducer } from './reducers/catSlice'

export const store = configureStore({
    reducer: {
        catReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action
>