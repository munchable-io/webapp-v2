import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./features/routing/Layout";
import RestaurantHome from "./pages/RestaurantHome";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<RestaurantHome />} />

				<Route path="*" element={<Navigate to="/" replace />} />
			</Route>
		</Routes>
	);
};

export default App;
