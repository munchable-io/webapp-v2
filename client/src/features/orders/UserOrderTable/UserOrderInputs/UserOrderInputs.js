import { OrderForm, OrderInputWrapper } from "../../orders.styled";

const UserOrderInputs = () => {
	return (
		<OrderForm>
			<OrderInputWrapper>
				<label htmlFor="status">Status</label>
				<select name="status" id="status">
					<option value="all" defaultChecked>
						All
					</option>
					<option value="paid">Created</option>
					<option value="paid">Paid</option>
					<option value="paid">Confirmed</option>
					<option value="paid">Ready</option>
					<option value="paid">Complete</option>
					<option value="paid">Refunded</option>
				</select>
			</OrderInputWrapper>
		</OrderForm>
	);
};

export default UserOrderInputs;
