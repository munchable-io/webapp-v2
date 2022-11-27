import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// define endpoint url
const ITEMS_URL = "http://localhost:5000/items";

// define initial state
const initialState = {
	items: [],
	selectedItem: undefined,
	status: "idle", // idle | loading | succeeded | failed
	error: null,
};

// async thunks
export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
	try {
		const response = await axios.get(ITEMS_URL);
		return response.data;
	} catch (err) {
		return err.message;
	}
});

// item slice
const itemsSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
		setSelectedItem(state, action) {
			state.selectedItem = state.items.find(
				(item) => item._id === action.payload
			);
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchItems.pending, (state, action) => {
				state.status = "loading";
			})
			.addCase(fetchItems.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.items = action.payload;
			})
			.addCase(fetchItems.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

// functions
export const getAllItems = (state) => state.items.items;
export const getItemsState = (state) => state.items.status;
export const getItemsError = (state) => state.items.error;
export const getSelectedItem = (state) => state.items.selectedItem;

// actions
export const { setSelectedItem } = itemsSlice.actions;

// export reducer
export default itemsSlice.reducer;
