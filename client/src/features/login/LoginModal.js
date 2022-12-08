import { useSelector } from "react-redux";
import { getScreen } from "./login.slice";
import LoginPhoneModal from "./LoginPhoneModal";
import LoginUserFound from "./LoginUserFound";
import LoginUserNotFound from "./LoginUserNotFound";

const LoginModal = () => {
	const screen = useSelector(getScreen);

	return (
		<>
			{screen === "phoneNumber" && <LoginPhoneModal />}
			{screen === "userFound" && <LoginUserFound />}
			{screen === "userNotFound" && <LoginUserNotFound />}
		</>
	);
};

export default LoginModal;
