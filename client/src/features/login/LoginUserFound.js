import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin, setUser } from "../auth/auth.slice";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import { getPhoneNumber, setScreen } from "./login.slice";
import { LoginSection, StyledLoginModal } from "./Login.styled";
import { addToast } from "../ui/Toast/Toast.slice";

const LoginUserFound = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	// get from location
	const from = location.state?.from?.pathname || "/";

	// get phone number
	const number = useSelector(getPhoneNumber);

	// form data
	const [otp, setOtp] = useState("");

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

			// clear out fields
			setOtp("");

			// reset login screen
			dispatch(setScreen("phoneNumber"));

			// redirect to wherever user came from
			navigate(from, { replace: true });

			dispatch(
				addToast({
					status: "success",
					header: "Success!",
					body: "You have successfully logged in.",
				})
			);
		} else {
			// clear out fields
			setOtp("");
			dispatch(
				addToast({
					status: "error",
					header: "Login Unsuccessful:",
					body: "Incorrect security code.",
				})
			);
		}
	};

	return (
		<StyledLoginModal>
			<LoginSection>
				<h3>Welcome Back!</h3>
				<p>A message has been sent to {number}</p>
				<p>Please enter the security code below</p>
			</LoginSection>
			<LoginSection align="left">
				<Input
					type="number"
					label="One-Time Passcode"
					width="100%"
					value={otp}
					setValue={(e) => setOtp(e.target.value)}
				/>
				<Link onClick={() => dispatch(setScreen("phoneNumber"))}>
					<p className="sm">Go Back</p>
				</Link>
			</LoginSection>
			<LoginSection>
				<Button onClick={handleSubmit} value="Login" width="100%" />
			</LoginSection>
		</StyledLoginModal>
	);
};

export default LoginUserFound;
