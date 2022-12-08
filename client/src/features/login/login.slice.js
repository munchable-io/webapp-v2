import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
	screen: "phoneNumber", // phoneNumber | userNotFound | userFound
	phoneNumber: undefined,
};

// login slice
const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		setScreen(state, action) {
			state.screen = action.payload;
		},
		setPhoneNumber(state, action) {
			state.phoneNumber = action.payload;
		},
	},
	extraReducers(builder) {},
});

// functions
export const getScreen = (state) => state.login.screen;
export const getPhoneNumber = (state) => state.login.phoneNumber;

// actions
export const { setScreen, setPhoneNumber } = loginSlice.actions;

// export reducer
export default loginSlice.reducer;
