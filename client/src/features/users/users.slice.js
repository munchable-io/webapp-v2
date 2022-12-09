import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	order: [],
	tip: 0.18,
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addItemToOrder(state, action) {
			const item = action.payload;
			if (
				state.order.filter((target) => target.name === item.name).length > 0
			) {
				const itemIndex = state.order.findIndex(
					(target) => target.name === item.name
				);
				state.order[itemIndex] = item;
			} else {
				state.order.push(item);
			}
		},
		removeItemFromOrder(state, action) {
			state.order = state.order.filter((item) => item.name !== action.payload);
		},
		incrementQty(state, action) {
			const index = state.order.findIndex(
				(item) => item.name === action.payload.itemName
			);
			if (state.order[index].qty + action.payload.amt > 0) {
				state.order[index].qty += action.payload.amt;
			}
		},
		setTip(state, action) {
			state.tip = action.payload;
		},
	},
});

// functions
export const getOrder = (state) => state.users.order;
export const getOrderSize = (state) => state.users.order.length;
export const getTip = (state) => state.users.tip;

// actions
export const { addItemToOrder, removeItemFromOrder, incrementQty, setTip } =
	usersSlice.actions;

// export reducer
export default usersSlice.reducer;
