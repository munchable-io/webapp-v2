import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./features/globalStyles/index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { fetchItems } from "./features/item/item.slice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

store.dispatch(fetchItems());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
