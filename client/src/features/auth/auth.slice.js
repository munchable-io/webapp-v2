import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// endpoint
const USERS_URL = "http://localhost:5000/users";
const AUTH_URL = "http://localhost:5000/users/auth";

// define initial state
const initialState = {
	user: {},
	status: "idle", // idle | loading | succeeded | failed
	error: null,
};

// async thunks
export const fetchUserByNumber = createAsyncThunk(
	"users/fetchUser",
	async (num) => {
		try {
			// try and fetch number from http://localhost:5000/users/send/:number
			const response = await axios.get(`${USERS_URL}/send/${num}`);
			return response.data;
		} catch (err) {
			return false;
		}
	}
);

export const handleLogin = createAsyncThunk("users/auth", async (payload) => {
	const { number, otp } = payload;
	try {
		// try and authenticate from http://localhost:5000/users/auth
		const response = await axios.post(AUTH_URL, {
			phoneNumber: number,
			password: otp,
		});
		return response.data;
	} catch (err) {
		return false;
	}
});

// auth slice
const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser(state, action) {
			state.user = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchUserByNumber.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchUserByNumber.fulfilled, (state, action) => {
				state.status = "succeeded";
			})
			.addCase(fetchUserByNumber.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(handleLogin.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(handleLogin.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.accessToken = action.payload;
			})
			.addCase(handleLogin.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

// functions
export const getUser = (state) => state.auth.user;

// actions
export const { setUser } = authSlice.actions;

// export reducer
export default authSlice.reducer;
