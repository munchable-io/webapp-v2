import { Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "./features/auth/RequireAuth";
import PersistLogin from "./features/auth/PersistLogin";
import Layout from "./features/routing/Layout";
import NoAuthPage from "./pages/NoAuthPage";
import EditorPage from "./pages/EditorPage";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import CheckoutPage from "./pages/CheckoutPage";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* public routes  */}
				<Route index element={<MenuPage />} />
				<Route path="unauthorized" element={<NoAuthPage />} />
				<Route path="login" element={<LoginPage />} />

				{/* protected routes  */}
				<Route element={<PersistLogin />}>
					{/* admin only routes */}

					{/* admin, manager routes */}
					<Route element={<RequireAuth allowedRoles={["manager", "admin"]} />}>
						<Route path="editor" element={<EditorPage />} />
					</Route>

					{/* admin, manager, user routes */}
					<Route
						element={
							<RequireAuth allowedRoles={["admin", "manager", "user"]} />
						}
					>
						<Route path="checkout" element={<CheckoutPage />} />
					</Route>
				</Route>

				{/* catch-all  */}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Route>
		</Routes>
	);
};

export default App;
