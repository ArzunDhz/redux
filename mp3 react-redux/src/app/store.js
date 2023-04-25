import { configureStore } from "@reduxjs/toolkit";
import  musicReducer from '../features/input/inputSlice'


export const store = configureStore ({
    reducer:{
        music:musicReducer,
    }
})