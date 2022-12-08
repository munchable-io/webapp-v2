import { useState } from "react";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import { LoginSection, StyledLoginModal } from "./Login.styled";

const LoginUserFound = () => {
	const [otp, setOtp] = useState("");

	const handleLogin = async () => {
		alert("Logging in...");
	};

	return (
		<StyledLoginModal>
			<LoginSection>
				<h3>Welcome Back, Jimbo!</h3>
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
				<Button onClick={handleLogin} value="Login" width="100%" />
			</LoginSection>
		</StyledLoginModal>
	);
};

export default LoginUserFound;
