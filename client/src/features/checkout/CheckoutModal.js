import { forwardRef } from "react";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import { getOrder, getTip } from "../users/users.slice";
import {
	CheckoutBody,
	CheckoutHeader,
	CheckoutItems,
	StyledCheckout,
} from "./Checkout.styled";
import Button from "../ui/Button/Button";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";
import Tip from "./Tip/Tip";
import { useNavigate } from "react-router-dom";

const CheckoutModal = forwardRef((props, ref) => {
	const navigate = useNavigate();
	const order = useSelector(getOrder);

	const tip = useSelector(getTip);
	const tax = 0.04225;
	const fee = 0.05;

	// create items to display
	const items = order.map((item) => <CheckoutItem key={item.id} item={item} />);

	const handleCheckout = () => {
		// close modal
		props.modifyModal(false);

		// navigate to checkout page
		order.length > 0 && navigate("/checkout");
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

						{/* tip selector */}
						<Tip />

						{/* give summary total */}
						<CheckoutSummary order={order} tax={tax} tip={tip} fee={fee} />

						<Button
							value="Proceed to Checkout"
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
