import { Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "./features/auth/RequireAuth";
import PersistLogin from "./features/auth/PersistLogin";
import Layout from "./features/routing/Layout";
import NoAuthPage from "./pages/NoAuthPage";
import EditorPage from "./pages/EditorPage";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import AccountPage from "./pages/AccountPage";
import RestaurantLoginPage from "./pages/RestaurantLoginPage";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* protected routes  */}
				<Route element={<PersistLogin />}>
					{/* public routes  */}
					<Route index element={<MenuPage />} />
					<Route path="unauthorized" element={<NoAuthPage />} />
					<Route path="login" element={<LoginPage />} />

					{/* admin only routes */}

					{/* manager routes */}
					<Route element={<RequireAuth allowedRoles={["manager"]} />}>
						<Route path="editor" element={<EditorPage />} />
						<Route path="restaurantLogin" element={<RestaurantLoginPage />} />
					</Route>

					{/* manager, user routes */}
					<Route element={<RequireAuth allowedRoles={["manager", "user"]} />}>
						<Route path="/checkout" element={<CheckoutPage />} />
						<Route path="/orders" element={<OrdersPage />} />
						<Route path="/account" element={<AccountPage />} />
					</Route>
				</Route>

				{/* catch-all  */}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Route>
		</Routes>
	);
};

export default App;
