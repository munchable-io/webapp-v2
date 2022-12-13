import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToast } from "../features/ui/Toast/Toast.slice";

const CheckoutPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			addToast({
				status: "success",
				header: "Payment Received",
				body: "You should receive a text update shortly.",
			})
		);
	});
	return (
		<div className="container">
			<h2>Woo! Success!</h2>
			<Link to="/">Head Home</Link>
		</div>
	);
};

export default CheckoutPage;
