import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isNavOpen: false,
	isCheckoutOpen: false,
};

const headerSlice = createSlice({
	name: "header",
	initialState,
	reducers: {
		setIsNavOpen(state, action) {
			state.isNavOpen = action.payload;
		},
		setIsCheckoutOpen(state, action) {
			state.isCheckoutOpen = action.payload;
		},
	},
});

export const isNavOpen = (state) => state.header.isNavOpen;
export const isCheckoutOpen = (state) => state.header.isCheckoutOpen;

export const { setIsNavOpen, setIsCheckoutOpen } = headerSlice.actions;

export default headerSlice.reducer;
