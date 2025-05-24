import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const CustomerSlice = createSlice({
    name:'Customer ',
    initialState,
    reducers  : {
        addCustomer(state,action){
            state.push(action.payload)
        },
        resetCustomers(state){
               return [];
        }
    }
})

export const {addCustomer, resetCustomers} =CustomerSlice.actions
export default CustomerSlice.reducer