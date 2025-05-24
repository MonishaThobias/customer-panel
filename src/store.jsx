import { configureStore } from "@reduxjs/toolkit";  
import CustomerReducer from "./slices/CustomerSlice";

export const store = configureStore({
    devTools: true,
    reducer :{
                Customers : CustomerReducer
    }
})