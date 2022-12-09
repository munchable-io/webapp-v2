import { forwardRef } from "react";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import { getOrder } from "../users/users.slice";
import {
	CheckoutBody,
	CheckoutHeader,
	CheckoutItems,
	StyledCheckout,
} from "./Checkout.styled";
import Button from "../ui/Button/Button";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";

const CheckoutModal = forwardRef((props, ref) => {
	const order = useSelector(getOrder);
	const tax = 0.04225;
	const fee = 0.03;

	// create items to display
	const items = order.map((item) => <CheckoutItem key={item.id} item={item} />);

	return (
		<StyledCheckout ref={ref}>
			<div className="container">
				<CheckoutHeader>
					<h3>Order Review:</h3>
					<FiX onClick={() => props.modifyModal(false)} />
				</CheckoutHeader>
				<CheckoutBody>
					{/* show items if in cart */}
					{order.length === 0 && <h4>Cart is currently empty</h4>}
					<CheckoutItems>{items}</CheckoutItems>

					{/* give summary total */}
					<CheckoutSummary order={order} tax={tax} fee={fee} />

					<Button
						value="Proceed to Checkout"
						width="100%"
						onClick={() => alert("Handle checkout...")}
					/>
				</CheckoutBody>
			</div>
		</StyledCheckout>
	);
});

export default CheckoutModal;
