import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
	toasts: [],
};

const toastsSlice = createSlice({
	name: "toasts",
	initialState,
	reducers: {
		addToast(state, action) {
			state.toasts.push({ id: nanoid(), ...action.payload });
		},
		removeToast(state, action) {
			state.toasts = state.toasts.filter(
				(toast) => toast.id !== action.payload
			);
		},
	},
});

export const getToasts = (state) => state.toasts.toasts;

export const { addToast, removeToast } = toastsSlice.actions;

export default toastsSlice.reducer;
