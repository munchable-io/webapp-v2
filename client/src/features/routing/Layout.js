import { Outlet } from "react-router-dom";
import Header from "../ui/Header/Header";
import Toasts from "../ui/Toast/Toasts";

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Toasts />
		</>
	);
};

export default Layout;
