import { forwardRef } from "react";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import { getLocalCart } from "../users/users.slice";
import {
	CheckoutBody,
	CheckoutHeader,
	CheckoutItems,
	StyledCheckout,
} from "./Checkout.styled";
import Button from "../ui/Button/Button";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import Tip from "./Tip/Tip";
import { useNavigate } from "react-router-dom";

const CheckoutModal = forwardRef((props, ref) => {
	const navigate = useNavigate();

	const order = useSelector(getLocalCart);

	// create items to display
	const items = order.map((item) => <CheckoutItem key={item.id} item={item} />);

	const handleCheckout = async () => {
		props.modifyModal(false);
		navigate("/checkout");
	};

	return (
		<StyledCheckout ref={ref}>
			<div className="container">
				<CheckoutHeader>
					<h3>Your Order</h3>
					<FiX onClick={() => props.modifyModal(false)} />
				</CheckoutHeader>
				{order.length === 0 ? (
					<CheckoutBody>
						<h4>Cart is currently empty</h4>
					</CheckoutBody>
				) : (
					<CheckoutBody>
						<CheckoutItems>{items}</CheckoutItems>
						<Tip />
						<Button
							value="Proceed to Payment"
							width="100%"
							onClick={handleCheckout}
						/>
					</CheckoutBody>
				)}
			</div>
		</StyledCheckout>
	);
});

export default CheckoutModal;
