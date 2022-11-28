import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutModalOpen } from "../restaurant/restaurant.slice";
import { getOrder } from "../users/users.slice";
import {
	CheckoutBody,
	CheckoutHeader,
	CheckoutWrapper,
	StyledCheckout,
} from "./Checkout.styled";
import CheckoutItem from "./CheckoutItem/CheckoutItem";

const CheckoutModal = () => {
	const dispatch = useDispatch();
	const order = useSelector(getOrder);

	const items = order.map((item) => <CheckoutItem key={item.id} item={item} />);

	return (
		<CheckoutWrapper>
			<StyledCheckout>
				<div className="container">
					<CheckoutHeader>
						<h2>Order Review:</h2>
						<FiX onClick={() => dispatch(setCheckoutModalOpen(false))} />
					</CheckoutHeader>
					<CheckoutBody>{items}</CheckoutBody>
				</div>
			</StyledCheckout>
		</CheckoutWrapper>
	);
};

export default CheckoutModal;
