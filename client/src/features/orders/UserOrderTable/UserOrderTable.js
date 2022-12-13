import { useSelector } from "react-redux";
import { getOrders } from "../orders.slice";
import { OrderTable, OrderTableWrapper } from "../orders.styled";
import { Link } from "react-router-dom";
import OrderStatus from "../OrderStatus/OrderStatus";
import UserOrderInputs from "./UserOrderInputs/UserOrderInputs";

const UserOrderTable = () => {
	const orders = useSelector(getOrders);

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
					{orders.map((item) => (
						<tr key={item?._id}>
							<td>Lucky Dynasty</td>
							<td>
								<OrderStatus status={item?.status} />
							</td>
							<td className="td-light">
								{new Date(item?.createdAt).toLocaleString()}
							</td>
							<td>${item?.totalAmount.toFixed(2)}</td>
							<td className="flex-row">
								<Link>Order Again</Link>
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
