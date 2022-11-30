import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { nanoid } from "@reduxjs/toolkit";

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
		resetSelectedItem(state, action) {
			state.selectedItem = {
				_id: nanoid(),
				name: "",
				category: "",
				description: "",
				price: "",
				note: {
					placeholder: "No substitutes; additions are subject to extra charge.",
				},
				options: [],
			};
		},
		addItemOption(state, action) {
			const option = {
				_id: nanoid(),
				name: "",
				selectionType: "single",
				description: "Please select one",
				required: false,
				maxQty: 1,
				choices: [],
			};
			state.selectedItem.options.push(option);
		},
		addOptionChoice(state, action) {
			const index = state.selectedItem.options.findIndex(
				(option) => option._id === action.payload.optionId
			);
			if (index !== -1 && action.payload?.choice) {
				const choice = {
					_id: nanoid(),
					name: action.payload.choice.name,
					cost: parseFloat(action.payload.choice.cost),
				};
				state.selectedItem.options[index].choices.push(choice);
			}
		},
		removeOptionChoice(state, action) {
			const optionIndex = state.selectedItem.options.findIndex(
				(option) => option._id === action.payload.optionId
			);
			const choices = state.selectedItem.options[optionIndex].choices.filter(
				(choice) => choice._id !== action.payload.choiceId
			);
			state.selectedItem.options[optionIndex].choices = choices;
		},
		setOptionName(state, action) {
			const optionIndex = state.selectedItem.options.findIndex(
				(option) => option._id === action.payload.optionId
			);
			state.selectedItem.options[optionIndex].name = action.payload.optionName;
		},
		setOptionSelectionType(state, action) {
			const optionIndex = state.selectedItem.options.findIndex(
				(option) => option._id === action.payload.optionId
			);
			state.selectedItem.options[optionIndex].selectionType =
				action.payload.optionSelectionType;
		},
		setOptionRequired(state, action) {
			const optionIndex = state.selectedItem.options.findIndex(
				(option) => option._id === action.payload.optionId
			);
			state.selectedItem.options[optionIndex].required =
				action.payload.required;
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
export const {
	setSelectedItem,
	resetSelectedItem,
	addItemOption,
	addOptionChoice,
	removeOptionChoice,
	setOptionName,
	setOptionSelectionType,
	setOptionRequired,
} = itemsSlice.actions;

// export reducer
export default itemsSlice.reducer;
