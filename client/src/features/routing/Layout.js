import { Outlet } from "react-router-dom";
import Header from "../ui/Header/Header";
import Toasts from "../ui/Toast/Toasts";
import { AppContainer, AppWrapper } from "./Layout.styled";

const Layout = () => {
	return (
		<AppWrapper>
			<Header />
			<AppContainer>
				<Outlet />
			</AppContainer>
			<Toasts />
		</AppWrapper>
	);
};

export default Layout;
