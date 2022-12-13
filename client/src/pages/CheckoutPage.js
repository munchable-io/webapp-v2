import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../features/api/axios";
import {
	createOrder,
	getFeeAmount,
	getSubTotalAmount,
	getTaxAmount,
	getTipAmount,
	getTotalAmount,
} from "../features/orders/orders.slice";
import { getUser } from "../features/auth/auth.slice";
import { getOrder } from "../features/users/users.slice";

const CheckoutPage = () => {
	const dispatch = useDispatch();

	const auth = useSelector(getUser);
	const order = useSelector(getOrder);

	const subTotalAmount = useSelector(getSubTotalAmount);
	const taxAmount = useSelector(getTaxAmount);
	const tipAmount = useSelector(getTipAmount);
	const feeAmount = useSelector(getFeeAmount);
	const totalAmount = useSelector(getTotalAmount);

	const handleCheckout = async () => {
		// add order to orders api
		const orderToSave = {
			userId: auth?.userId,
			status: "created",
			subTotalAmount,
			taxAmount,
			tipAmount,
			feeAmount,
			totalAmount,
			items: order.map((item) => ({
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
			})),
		};
		await dispatch(createOrder(orderToSave));

		// format order data for stripe payment payload
		const payload = {
			cancelUrl: "http://localhost:3000", // TODO: update
			successUrl: "http://localhost:3000", // TODO: update
			lineItems: order.map((item) => ({
				quantity: item.qty,
				tax_rates: ["txr_1ME040DHS9nkPMw6773fn4JZ"],
				price_data: {
					currency: "usd",
					unit_amount: Math.round(100 * item.price),
					product_data: {
						name: item.name,
					},
				},
			})),
		};

		// try sending to stripe checkout
		try {
			const response = await axios.post("/payment/pay", payload);
			const url = await response?.data?.url;
			window.location.href = url;
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		handleCheckout();
	}, []); // eslint-disable-line

	return (
		<>
			<div className="container">
				<p>Redirecting to stripe...</p>
			</div>
		</>
	);
};

export default CheckoutPage;
