import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./features/routing/Layout";
import MenuEditor from "./pages/MenuEditor";
import RestaurantHome from "./pages/RestaurantHome";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<RestaurantHome />} />

				<Route path="editor" element={<MenuEditor />} />

				<Route path="*" element={<Navigate to="/" replace />} />
			</Route>
		</Routes>
	);
};

export default App;
