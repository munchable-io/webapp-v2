import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin, setUser } from "../auth/auth.slice";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import { getPhoneNumber, setScreen } from "./login.slice";
import { LoginSection, StyledLoginModal } from "./Login.styled";

const LoginUserFound = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const [otp, setOtp] = useState("");
	const number = useSelector(getPhoneNumber); // get phone number

	const handleSubmit = async () => {
		// authentication
		const result = await dispatch(handleLogin({ number, otp }));

		if (result?.payload) {
			// get data from auth endpoints
			const accessToken = result.payload?.accessToken;
			const role = result.payload?.role;
			const firstName = result.payload?.firstName;
			const lastName = result.payload?.lastName;

			// update state info
			await dispatch(
				setUser({
					number,
					firstName,
					lastName,
					accessToken,
					role,
				})
			);

			// redirect to wherever user came from
			navigate("/");

			// reset login screen
			dispatch(setScreen("phoneNumber"));

			alert("Successfully logged in.");
		} else {
			alert("Yeet wrong password boi");
		}

		// clear out fields
		setOtp("");
	};

	return (
		<StyledLoginModal>
			<LoginSection>
				<h3>Welcome Back!</h3>
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
				<Button onClick={handleSubmit} value="Login" width="100%" />
			</LoginSection>
		</StyledLoginModal>
	);
};

export default LoginUserFound;
