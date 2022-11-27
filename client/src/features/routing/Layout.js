import { Outlet } from "react-router-dom";
import Header from "../ui/Header/Header";

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
