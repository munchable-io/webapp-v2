import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder, setOrder } from "../features/users/users.slice";
import { getUser } from "../features/auth/auth.slice";
import {
	createOrder,
	getFeeAmount,
	getSubTotalAmount,
	getTaxAmount,
	getTipAmount,
	getTotalAmount,
} from "../features/orders/orders.slice";
import { addToast } from "../features/ui/Toast/Toast.slice";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const auth = useSelector(getUser);
	const order = useSelector(getOrder);

	// calculate totals
	const subTotalAmount = useSelector(getSubTotalAmount);
	const taxAmount = useSelector(getTaxAmount);
	const tipAmount = useSelector(getTipAmount);
	const feeAmount = useSelector(getFeeAmount);
	const totalAmount = useSelector(getTotalAmount);

	useEffect(() => {
		const sendToServer = async () => {
			// create order to send
			const orderToSend = {
				userId: auth?.userId,
				status: "created",
				items: order.map((item) => {
					return {
						name: item?.name,
						message: item?.message,
						price: item?.price,
						qty: item?.qty,
						options: item?.options.map((option) => ({
							name: option?.name,
							choices: option?.choices.map((choice) => ({
								name: choice?.name,
								cost: choice?.cost,
							})),
						})),
					};
				}),
				subTotalAmount: parseFloat(subTotalAmount.toFixed(2)),
				taxAmount: parseFloat(taxAmount.toFixed(2)),
				tipAmount: parseFloat(tipAmount.toFixed(2)),
				feeAmount: parseFloat(feeAmount.toFixed(2)),
				totalAmount: parseFloat(totalAmount.toFixed(2)),
			};

			// create/update order in db
			try {
				await dispatch(createOrder(orderToSend));
			} catch (err) {
				console.error(err);
			}

			// reset order state
			dispatch(setOrder([]));

			// notify user
			dispatch(
				addToast({
					status: "Success",
					header: "Success!",
					body: "Your order has been created.",
				})
			);

			// navigate to orders page
			navigate("/", { replace: true });
		};

		sendToServer();
	}, []); // eslint-disable-line

	return <div>CheckoutPage</div>;
};

export default CheckoutPage;
