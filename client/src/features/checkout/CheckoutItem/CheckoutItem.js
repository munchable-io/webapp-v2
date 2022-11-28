import { FiTrash2, FiEdit } from "react-icons/fi";
import { CheckoutItemSection, StyledCheckoutItem } from "./Checkout.styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItemFromOrder } from "../../users/users.slice";

const CheckoutItem = ({ item }) => {
	const dispatch = useDispatch();
	const [showDetails, setShowDetails] = useState(false);

	const itemOptions = item?.options.map((option, index) => {
		const choices = option?.choices.map(
			(choice) =>
				choice?.name + (choice?.cost !== 0 ? ` ($${choice?.cost}) ` : "")
		);

		return (
			<p className="sm" key={index}>
				<span className="bold">{option?.name}</span>:{" "}
				<span>{choices.join(", ")}</span>
			</p>
		);
	});

	return (
		<StyledCheckoutItem>
			<CheckoutItemSection>
				<h4>{`${item?.name} x${item?.qty}`}</h4>
				<p>${item?.price}</p>
			</CheckoutItemSection>
			<CheckoutItemSection>
				<div className="row">
					<FiEdit />
					<FiTrash2 onClick={() => dispatch(removeItemFromOrder(item?.name))} />
				</div>
				<Link onClick={() => setShowDetails(!showDetails)} className="sm">
					{showDetails ? "hide " : "show "}details
				</Link>
			</CheckoutItemSection>
			{showDetails && (
				<CheckoutItemSection>
					<div className="column">
						{itemOptions}
						<p className="sm">
							<span className="bold">Special instructions</span>:
							{` ${item?.message}`}
						</p>
					</div>
				</CheckoutItemSection>
			)}
		</StyledCheckoutItem>
	);
};

export default CheckoutItem;
