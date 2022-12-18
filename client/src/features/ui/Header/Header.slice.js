import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isNavOpen: false,
};

const headerSlice = createSlice({
	name: "header",
	initialState,
	reducers: {
		setIsNavOpen(state, action) {
			state.isNavOpen = action.payload;
		},
	},
});

export const isNavOpen = (state) => state.header.isNavOpen;

export const { setIsNavOpen } = headerSlice.actions;

export default headerSlice.reducer;
