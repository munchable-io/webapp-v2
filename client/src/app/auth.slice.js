import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// endpoint
const USERS_URL = "http://localhost:5000/users";

// define initial state
const initialState = {
	user: {},
	accessToken: undefined,
	status: "idle", // idle | loading | succeeded | failed
	error: null,
};

// async thunks
export const fetchUserByNumber = createAsyncThunk(
	"users/fetchUser",
	async (num) => {
		try {
			// try and fetch number from http://localhost:5000/users/send/:number
			await axios.get(`${USERS_URL}/send/${num}`);
			return true;
		} catch (err) {
			return false;
		}
	}
);

// auth slice
const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchUserByNumber.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchUserByNumber.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.user = action.payload;
			})
			.addCase(fetchUserByNumber.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

// functions
export const getAccessToken = (state) => state.auth.accessToken;

// actions

// export reducer
export default authSlice.reducer;
