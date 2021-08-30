import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducer";

const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
})



export { store }

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;