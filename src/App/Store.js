import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../Feautres/Counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter : counterReducer
    }
}) 