import { FiTrash2 } from "react-icons/fi";
import { CheckoutItemSection, StyledCheckoutItem } from "./Checkout.styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementQty } from "../../users/users.slice";
import { deleteFromLocalCart } from "../../users/users.slice";
import Counter from "../../ui/Counter/Counter";

const CheckoutItem = ({ item }) => {
	const dispatch = useDispatch();
	const [showDetails, setShowDetails] = useState(false);

	const itemOptions = item?.options.map((option, index) => {
		const choices = option?.choices.map(
			(choice) =>
				choice?.name +
				(choice?.cost !== 0 ? ` ($${choice?.cost?.toFixed(2)}) ` : "")
		);

		return (
			<p className="sm" key={index}>
				<span className="bold">{option?.name}</span>:{" "}
				<span>{choices.join(", ")}</span>
			</p>
		);
	});

	const handleDelete = (id) => {
		dispatch(deleteFromLocalCart(id));
	};

	return (
		<StyledCheckoutItem>
			<CheckoutItemSection>
				<h4>{`${item?.name} x${item?.qty}`}</h4>
				<p>${((item?.price + item?.additionalPrice) * item?.qty).toFixed(2)}</p>
			</CheckoutItemSection>
			<CheckoutItemSection>
				<div className="row">
					<Counter
						value={item?.qty}
						increment={() => dispatch(incrementQty({ id: item?.id, amt: 1 }))}
						decrement={() => dispatch(incrementQty({ id: item?.id, amt: -1 }))}
					/>
					<FiTrash2 onClick={() => handleDelete(item?.id)} />
				</div>
				<Link onClick={() => setShowDetails(!showDetails)} className="sm">
					{showDetails ? "hide " : "show "}details
				</Link>
			</CheckoutItemSection>
			{showDetails && (
				<CheckoutItemSection>
					<div className="column">
						<p className="sm">
							<span className="bold">{item?.name}</span>:{` $${item.price}`}
						</p>
						{item?.additionalPrice !== 0 && (
							<p className="sm">
								<span className="bold">Additional costs</span>:
								{` $${item?.additionalPrice?.toFixed(
									2
								)} (see below for details)`}
							</p>
						)}
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
