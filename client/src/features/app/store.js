import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../item/item.slice";
import usersReducer from "../users/users.slice";
import authReducer from "../auth/auth.slice";
import loginReducer from "../login/login.slice";
import toastsReducer from "../ui/Toast/Toast.slice";
import ordersReducer from "../orders/orders.slice";
import headerReducer from "../ui/Header/Header.slice";

export const store = configureStore({
	reducer: {
		items: itemsReducer,
		users: usersReducer,
		auth: authReducer,
		login: loginReducer,
		toasts: toastsReducer,
		orders: ordersReducer,
		header: headerReducer,
	},
});
