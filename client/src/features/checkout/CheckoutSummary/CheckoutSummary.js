import { useSelector } from "react-redux";
import {
	getFeeAmount,
	getSubTotalAmount,
	getTaxAmount,
	getTipAmount,
	getTotalAmount,
} from "../../orders/orders.slice";
import { SummaryRow, SummaryWrapper } from "./CheckoutSummary.styled";

const CheckoutSummary = () => {
	const subTotalAmount = useSelector(getSubTotalAmount);
	const taxAmount = useSelector(getTaxAmount);
	const tipAmount = useSelector(getTipAmount);
	const feeAmount = useSelector(getFeeAmount);
	const totalAmount = useSelector(getTotalAmount);

	return (
		<SummaryWrapper>
			<h4>Order Summary</h4>
			<SummaryRow>
				<p className="description">Subtotal:</p>
				<p className="content">${subTotalAmount.toFixed(2)}</p>
			</SummaryRow>
			<SummaryRow>
				<p className="description">Tax:</p>
				<p className="content">${taxAmount.toFixed(2)}</p>
			</SummaryRow>
			<SummaryRow>
				<p className="description">Tip:</p>
				<p className="content">${tipAmount.toFixed(2)}</p>
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
