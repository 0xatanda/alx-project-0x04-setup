import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        Value: 0
    },
    reducers: {
        increment: (state) => {
            state.Value += 1
        },
        decrement:  (state) => {
            if(state.Value > 0) {
                state.Value -= 1
            }
        }
    }
})

const store = configureStore ({
    reducer: {
        counter: counterSlice.reducer
    }
})

export const { increment, decrement } = counterSlice.actions
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store