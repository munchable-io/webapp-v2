import { SummaryRow, SummaryWrapper } from "./CheckoutSummary.styled";

const CheckoutSummary = ({ order, tax, fee }) => {
	// calculate the cost of all items
	const getOrderSubtotal = () => {
		let total = 0;
		for (let item of order) total += item?.qty * item?.price;
		return total;
	};

	const subtotalAmount = getOrderSubtotal();
	const taxAmount = tax * subtotalAmount;
	const feeAmount = fee * subtotalAmount;
	const totalAmount = subtotalAmount + taxAmount + feeAmount;

	return (
		<SummaryWrapper>
			<SummaryRow>
				<p className="description">Subtotal:</p>
				<p className="content">${subtotalAmount.toFixed(2)}</p>
			</SummaryRow>
			<SummaryRow>
				<p className="description">Tax:</p>
				<p className="content">${taxAmount.toFixed(2)}</p>
			</SummaryRow>
			<SummaryRow>
				<p className="description">Fees:</p>
				<p className="content">${feeAmount.toFixed(2)}</p>
			</SummaryRow>
			<SummaryRow>
				<p className="description">Total:</p>
				<p className="content">${totalAmount.toFixed(2)}</p>
			</SummaryRow>
		</SummaryWrapper>
	);
};

export default CheckoutSummary;
