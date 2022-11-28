import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	checkoutModalOpen: false,
};

const restaurantsSlice = createSlice({
	name: "restaurants",
	initialState,
	reducers: {
		setCheckoutModalOpen(state, action) {
			state.checkoutModalOpen = action.payload;
		},
	},
});

// functions
export const getCheckoutModalOpen = (state) =>
	state.restaurants.checkoutModalOpen;

// actions
export const { setCheckoutModalOpen } = restaurantsSlice.actions;

// export reducer
export default restaurantsSlice.reducer;
