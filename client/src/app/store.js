import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../features/item/item.slice";
import ordersReducer from "../features/order/order.slice";

export const store = configureStore({
	reducer: {
		items: itemsReducer,
		orders: ordersReducer,
	},
});
