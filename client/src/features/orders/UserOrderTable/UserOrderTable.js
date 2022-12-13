import { useSelector } from "react-redux";
import { getOrders } from "../orders.slice";
import { OrderTable, OrderTableWrapper } from "../orders.styled";
import { Link, useNavigate } from "react-router-dom";
import OrderStatus from "../OrderStatus/OrderStatus";
import UserOrderInputs from "./UserOrderInputs/UserOrderInputs";

const UserOrderTable = () => {
	const orders = useSelector(getOrders);
	const navigate = useNavigate();

	const reorder = (order) => {
		// navigate to menu
		navigate("", { replace: false });
		// add menu items to cart

		// open modal

		console.log(order._id);
	};

	return (
		<OrderTableWrapper>
			<UserOrderInputs />
			<OrderTable>
				<thead>
					<tr>
						<td>Restaurant</td>
						<td>Status</td>
						<td>Date</td>
						<td>Amount</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{orders.map((order) => (
						<tr key={order?._id}>
							<td>Lucky Dynasty</td>
							<td>
								<OrderStatus status={order?.status} />
							</td>
							<td className="td-light">
								{new Date(order?.createdAt).toLocaleString()}
							</td>
							<td>${order?.totalAmount.toFixed(2)}</td>
							<td className="flex-row">
								<Link onClick={() => reorder(order)}>Order Again</Link>
								<Link>View Order Details</Link>
							</td>
						</tr>
					))}
				</tbody>
			</OrderTable>
		</OrderTableWrapper>
	);
};

export default UserOrderTable;
