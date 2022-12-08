import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, handleLogin } from "../../app/auth.slice";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import { getPhoneNumber } from "./login.slice";
import { LoginSection, StyledLoginModal } from "./Login.styled";

const LoginUserFound = () => {
	const dispatch = useDispatch();

	const [otp, setOtp] = useState("");
	const user = useSelector(getUser);
	const number = useSelector(getPhoneNumber); // get phone number

	const onLogin = async () => {
		const result = await dispatch(handleLogin({ number, otp }));
		if (result?.payload) {
			alert("Woohoo you're logged in!!!");
		} else {
			alert("Yeet wrong password boi");
		}
	};

	return (
		<StyledLoginModal>
			<LoginSection>
				<h3>Welcome Back, {user?.firstName || "user"}!</h3>
				<p>Please enter the code just sent to your phone</p>
			</LoginSection>
			<LoginSection>
				<Input
					type="number"
					label="One-Time Passcode"
					width="100%"
					value={otp}
					setValue={(e) => setOtp(e.target.value)}
				/>
			</LoginSection>
			<LoginSection>
				<Button onClick={onLogin} value="Login" width="100%" />
			</LoginSection>
		</StyledLoginModal>
	);
};

export default LoginUserFound;
