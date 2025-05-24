import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const CustomerSlice = createSlice({
    name: 'Customer',
    initialState,
    reducers: {
        addCustomer(state, action) {
            state.push(action.payload);
        },
        resetCustomers() {
            return [];
        },
        removeCustomer(state, action) {
            return state.filter((id) => action.payload !== id);
        }
    }
});

export const { addCustomer, resetCustomers, removeCustomer } = CustomerSlice.actions;
export default CustomerSlice.reducer;