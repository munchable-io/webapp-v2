import { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import {
	RiCheckboxCircleFill,
	RiInformationFill,
	RiErrorWarningFill,
	RiQuestionFill,
} from "react-icons/ri";
import { StyledToast } from "./Toast.styled";

const Toast = ({ status, title, message, deleteToast }) => {
	const [color, setColor] = useState("");

	useEffect(() => {
		switch (status.toLowerCase()) {
			case "success":
				setColor("#2ecc71");
				break;
			case "warning":
				setColor("#f39c12");
				break;
			case "error":
				setColor("#c0392b");
				break;
			case "info":
				setColor("#3498db");
				break;
			default:
				setColor("#b2bec3");
				break;
		}
	}, [status]);

	useEffect(() => {
		const timer = setTimeout(() => {
			deleteToast();
		}, 2500);

		return () => clearTimeout(timer);
	});

	return (
		<StyledToast color={color}>
			<div className="toastContainer">
				<div className="toastContent">
					<ToastIcon color={color} status={status} />
					<div className="toastBody">
						<h4>{title}</h4>
						<p>{message}</p>
					</div>
				</div>
				<BiX onClick={deleteToast} />
			</div>
		</StyledToast>
	);
};

const ToastIcon = ({ status }) => {
	switch (status.toLowerCase()) {
		case "success":
			return <RiCheckboxCircleFill />;
		case "warning":
			return <RiErrorWarningFill />;
		case "error":
			return <RiErrorWarningFill />;
		case "info":
			return <RiInformationFill />;
		default:
			return <RiQuestionFill />;
	}
};

export default Toast;
