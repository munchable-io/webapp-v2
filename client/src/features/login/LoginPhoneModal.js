import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUserByNumber } from "../../app/auth.slice";
import { store } from "../../app/store";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import { setPhoneNumber, setScreen } from "./login.slice";
import { LoginSection, StyledLoginModal } from "./Login.styled";

const LoginPhoneModal = () => {
	const dispatch = useDispatch();
	const [number, setNumber] = useState("");

	const handlePhoneNumber = async () => {
		if (number.length === 10) {
			// create complete phone number
			const countryCode = "+1";
			const completeNumber = countryCode + number;

			// save phone number in state
			dispatch(setPhoneNumber(completeNumber));

			// check if user exists
			const result = await store.dispatch(fetchUserByNumber(completeNumber)); // sends otp to user if exists
			const userExists = result.payload;
			if (userExists) {
				// move to userFound screen
				dispatch(setScreen("userFound"));
			} else {
				// move to userNotFound screen
				dispatch(setScreen("userNotFound"));
			}

			// clear input fields
			setNumber("");
		} else {
			alert("Error: please input a 10-digit phone number (no country code)");
		}
	};

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
					value={number}
					setValue={(e) => setNumber(e.target.value)}
				/>
			</LoginSection>
			<LoginSection>
				<Button onClick={handlePhoneNumber} value="Continue" width="100%" />
			</LoginSection>
		</StyledLoginModal>
	);
};

export default LoginPhoneModal;
