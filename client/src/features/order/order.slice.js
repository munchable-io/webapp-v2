import { createSlice } from "@reduxjs/toolkit";

// define endpoint url
const ORDERS_URL = "";

// define initial state
const initialState = {
	order: [],
};

// async thunks

// order slice
const ordersSlice = createSlice({
	name: "orders",
	initialState,
	reducers: {
		addToOrder(state, action) {},
	},
	extraReducers(builder) {},
});

// functions

// actions

// export reducer
export default ordersSlice.reducer;
