import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/auth/auth.slice";
import ManagerOrderTable from "../features/orders/ManagerOrderTable";
import { getOrdersByUser } from "../features/orders/orders.slice";
import UserOrderTable from "../features/orders/UserOrderTable";

const OrdersPage = () => {
	const dispatch = useDispatch();
	const auth = useSelector(getUser);

	useEffect(() => {
		dispatch(getOrdersByUser(auth?.userId));
	}, [auth?.userId]); // eslint-disable-line

	return (
		<div className="container">
			<h2>Orders Page</h2>
			{auth?.role === "user" ? <UserOrderTable /> : <ManagerOrderTable />}
		</div>
	);
};

export default OrdersPage;
