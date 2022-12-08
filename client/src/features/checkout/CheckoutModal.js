import { forwardRef } from "react";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import { getOrder } from "../users/users.slice";
import {
	CheckoutBody,
	CheckoutHeader,
	StyledCheckout,
} from "./Checkout.styled";
import CheckoutItem from "./CheckoutItem/CheckoutItem";

const CheckoutModal = forwardRef((props, ref) => {
	const order = useSelector(getOrder);
	const items = order.map((item) => <CheckoutItem key={item.id} item={item} />);

	return (
		<StyledCheckout ref={ref}>
			<div className="container">
				<CheckoutHeader>
					<h2>Order Review:</h2>
					<FiX onClick={() => props.modifyModal(false)} />
				</CheckoutHeader>
				<CheckoutBody>
					{order.length === 0 && <h4>Cart is currently empty</h4>}
					{items}
				</CheckoutBody>
			</div>
		</StyledCheckout>
	);
});

export default CheckoutModal;
