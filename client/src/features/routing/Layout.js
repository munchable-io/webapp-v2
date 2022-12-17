import { Outlet } from "react-router-dom";
import Toasts from "../ui/Toast/Toasts";
import Header from "../Header";
import { AppSection, AppWrapper } from "./Global.styled";
import Nav from "../Nav";
import Footer from "../ui/Footer/Footer";

const Layout = () => {
	return (
		<AppWrapper>
			<Nav />
			<AppSection>
				<Header />
				<Outlet />
				<Toasts />
				<Footer />
			</AppSection>
		</AppWrapper>
	);
};

export default Layout;
