import { useEffect } from "react";
import {
	FiAlertCircle,
	FiAlertOctagon,
	FiAlertTriangle,
	FiCheckCircle,
	FiX,
} from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeToast } from "./Toast.slice";

import { StyledToast, ToastBody } from "./Toast.styled";

const Toast = ({ toast }) => {
	const dispatch = useDispatch();

	const getColor = () => {
		switch (toast?.status?.toLowerCase()) {
			case "success":
				return "#00b894";
			case "warning":
				return "#fdcb6e";
			case "error":
				return "#d63031";
			case "info":
				return "#0984e3";
			default:
				return "#0984e3";
		}
	};

	const getIcon = () => {
		switch (toast?.status?.toLowerCase()) {
			case "success":
				return <FiCheckCircle />;
			case "warning":
				return <FiAlertTriangle />;
			case "error":
				return <FiAlertOctagon />;
			case "info":
				return <FiAlertCircle />;
			default:
				return <FiAlertCircle />;
		}
	};
	const icon = getIcon();

	const handleClick = () => {
		dispatch(removeToast(toast.id));
	};

	useEffect(() => {
		setTimeout(() => {
			dispatch(removeToast(toast.id));
		}, 4000);
	}, []); // eslint-disable-line

	return (
		<StyledToast>
			<ToastBody color={getColor()}>
				<div className="icon">{icon}</div>
				<div className="content">
					<p className="sm">{toast.header}</p>
					<p className="xs second">{toast.body}</p>
				</div>
				<div className="exitIcon">
					<FiX onClick={handleClick} />
				</div>
			</ToastBody>
		</StyledToast>
	);
};

export default Toast;
