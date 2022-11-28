import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	order: [],
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
	},
});

// functions
export const getOrder = (state) => state.users.order;

// actions
export const { addItemToOrder } = usersSlice.actions;

// export reducer
export default usersSlice.reducer;
