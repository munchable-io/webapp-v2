import { StatusWrapper } from "./OrderStatus.styled";

const OrderStatus = ({ status, children }) => {
	const getColor = () => {
		switch (status) {
			case "created":
				return "#34495e";
			case "paid":
				return "#00b894";
			case "in-progress":
				return "#0984e3";
			case "ready":
				return "#d63031";
			case "complete":
				return "#636e72";
			case "refunded":
				return "#f39c12";
			default:
				return "000000";
		}
	};
	return (
		<StatusWrapper color={getColor()}>{status.toLowerCase()}</StatusWrapper>
	);
};

export default OrderStatus;
