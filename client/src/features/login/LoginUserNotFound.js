import { useState } from "react";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import { LoginSection, StyledLoginModal } from "./Login.styled";

const LoginUserNotFound = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");

	const handleCreateAccount = async () => {
		alert("Creating account...");
	};

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
};

export default LoginUserNotFound;
