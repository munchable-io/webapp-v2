import { forwardRef } from "react";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
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
import {
	setFeeAmount,
	setSubTotalAmount,
	setTaxAmount,
	setTipAmount,
	setTotalAmount,
} from "../orders/orders.slice";
import { useNavigate } from "react-router-dom";

const CheckoutModal = forwardRef((props, ref) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const order = useSelector(getOrder);

	const getOrderSubtotal = () => {
		let total = 0;
		for (let item of order) total += item?.qty * item?.price;
		return total;
	};

	// get percentages for tax, tip, and fee
	const taxPercent = 0.04225;
	const tipPercent = useSelector(getTip);
	const feePercent = 0.05;

	// calculate totals
	const subTotalAmount = getOrderSubtotal();
	const taxAmount = subTotalAmount * taxPercent;
	const tipAmount = subTotalAmount * tipPercent;
	const feeAmount = subTotalAmount * feePercent;
	const totalAmount = subTotalAmount + taxAmount + tipAmount + feeAmount;

	// update totals
	const updateTotals = async () => {
		try {
			// update state with totals
			await dispatch(setSubTotalAmount(subTotalAmount));
			await dispatch(setTaxAmount(taxAmount));
			await dispatch(setTipAmount(tipAmount));
			await dispatch(setFeeAmount(feeAmount));
			await dispatch(setTotalAmount(totalAmount));
		} catch (err) {
			console.log(err);
		}
	};
	updateTotals();

	// create items to display
	const items = order.map((item) => <CheckoutItem key={item.id} item={item} />);

	const handleCheckout = async () => {
		// close modal
		props.modifyModal(false);
		// navigate to checkout page
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
						<CheckoutSummary />
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
