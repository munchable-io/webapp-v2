import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../app/store";
import { fetchUserByNumber, handleCreateAccount } from "../auth/auth.slice";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import { Link } from "react-router-dom";
import { getPhoneNumber, setScreen } from "./login.slice";
import { LoginSection, StyledLoginModal } from "./Login.styled";
import { addToast } from "../ui/Toast/Toast.slice";

const LoginUserNotFound = () => {
	const dispatch = useDispatch();

	// get phone number
	const phoneNumber = useSelector(getPhoneNumber);

	// form data
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	const sendOtp = async () => {
		// send otp to number
		try {
			const result = await store.dispatch(fetchUserByNumber(phoneNumber));
			if (result.payload) {
				// clear input fields
				setFirstName("");
				setLastName("");
				setEmail("");

				// move to userFound screen
				dispatch(setScreen("userFound"));
			} else {
				// idk how this could be reached
				dispatch(
					addToast({
						status: "error",
						header: "Error:",
						body: "Unable to log in at this time.",
					})
				);
				console.log(result.payload);

				// clear input fields
				setFirstName("");
				setLastName("");
				setEmail("");

				// go back to phone number screen
				dispatch(setScreen("phoneNumber"));
			}
		} catch (err) {
			console.error(err);
		}
	};

	const handleCreateAcc = async () => {
		try {
			await dispatch(
				handleCreateAccount({ firstName, lastName, phoneNumber, email })
			);
			sendOtp();
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<StyledLoginModal>
			<LoginSection>
				<h3>Create Account</h3>
				<p>Last step before your account is created!</p>
			</LoginSection>
			<LoginSection align="left">
				<Input
					type="text"
					label="First Name"
					width="100%"
					value={firstName}
					setValue={(e) => setFirstName(e.target.value)}
				/>
				<Input
					type="text"
					label="Last Name"
					width="100%"
					value={lastName}
					setValue={(e) => setLastName(e.target.value)}
				/>
				<Input
					type="email"
					label="Email"
					width="100%"
					value={email}
					setValue={(e) => setEmail(e.target.value)}
				/>
				<Link onClick={() => dispatch(setScreen("phoneNumber"))}>
					<p className="sm">Go Back</p>
				</Link>
			</LoginSection>
			<LoginSection>
				<Button onClick={handleCreateAcc} value="Create Account" width="100%" />
			</LoginSection>
		</StyledLoginModal>
	);
};

export default LoginUserNotFound;
