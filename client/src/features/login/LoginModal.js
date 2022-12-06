import { useState } from "react";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import { LoginSection, StyledLoginModal } from "./Login.styled";
import { store } from "../../app/store";
import { fetchUserByNumber } from "../../app/auth.slice";

const LoginModal = () => {
	const [screen, setScreen] = useState("phoneNumber");

	const [phoneNumber, setPhoneNumber] = useState("");

	const [otp, setOtp] = useState("");

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	const handlePhoneNumber = () => {
		if (phoneNumber.length === 10) {
			store.dispatch(fetchUserByNumber(phoneNumber));
			setScreen("userNotFound");
		} else {
			alert("Error: please input a 10-digit phone number (no country code)");
		}
	};

	const handleCreateAccount = () => {
		setScreen("userFound");
	};

	const handleLogin = () => {
		alert("Logged In!");

		setPhoneNumber("");
		setOtp("");
		setFirstName("");
		setLastName("");
		setEmail("");
		setScreen("phoneNumber");
	};

	if (screen === "phoneNumber") {
		return (
			<StyledLoginModal>
				<LoginSection>
					<h3>Welcome!</h3>
					<p>Please enter your phone number below to continue</p>
				</LoginSection>
				<LoginSection>
					<Input
						type="number"
						label="Phone Number"
						width="100%"
						value={phoneNumber}
						setValue={(e) => setPhoneNumber(e.target.value)}
					/>
				</LoginSection>
				<LoginSection>
					<Button onClick={handlePhoneNumber} value="Continue" width="100%" />
				</LoginSection>
			</StyledLoginModal>
		);
	} else if (screen === "userFound") {
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
	} else if (screen === "userNotFound") {
		return (
			<StyledLoginModal>
				<LoginSection>
					<h3>Create Account</h3>
					<p>Last step before your account is created!</p>
				</LoginSection>
				<LoginSection>
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
				</LoginSection>
				<LoginSection>
					<Button
						onClick={handleCreateAccount}
						value="Create Account"
						width="100%"
					/>
				</LoginSection>
			</StyledLoginModal>
		);
	} else {
		setScreen("phoneNumber");
	}
};

export default LoginModal;
