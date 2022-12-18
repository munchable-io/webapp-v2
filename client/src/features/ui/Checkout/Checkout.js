import { forwardRef } from "react";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getLocalCart } from "../../users/users.slice";
import { isCheckoutOpen, setIsCheckoutOpen } from "../Header/Header.slice";
import CartItem from "./CartItem/CartItem";
import {
	CheckoutBody,
	CheckoutHeader,
	StyledCheckout,
} from "./Checkout.styled";
import Button from "../Button/Button";

const Checkout = forwardRef((props, ref) => {
	const dispatch = useDispatch();
	const checkoutOpen = useSelector(isCheckoutOpen);
	const cart = useSelector(getLocalCart);

	const handleCheckout = () => {
		alert("Handling checkout here...");
	};

	return (
		<StyledCheckout ref={ref} open={checkoutOpen}>
			<CheckoutHeader>
				<h4>Cart</h4>
				<FiX onClick={() => dispatch(setIsCheckoutOpen(false))} />
			</CheckoutHeader>

			{cart.length === 0 ? (
				<CheckoutBody>
					<p>Cart is currently empty.</p>
				</CheckoutBody>
			) : (
				<CheckoutBody>
					{cart.map((item) => (
						<CartItem key={item?.id} item={item} />
					))}
					<Button
						value="Checkout"
						width="100%"
						color="#0984e3"
						onClick={handleCheckout}
					/>
				</CheckoutBody>
			)}
		</StyledCheckout>
	);
});

export default Checkout;
