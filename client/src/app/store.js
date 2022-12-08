import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./item.slice";
import usersReducer from "../features/users/users.slice";
import restaurantsReducer from "../features/restaurant/restaurant.slice";
import authReducer from "./auth.slice";
import loginReducer from "../features/login/login.slice";

export const store = configureStore({
	reducer: {
		items: itemsReducer,
		users: usersReducer,
		restaurants: restaurantsReducer,
		auth: authReducer,
		login: loginReducer,
	},
});
