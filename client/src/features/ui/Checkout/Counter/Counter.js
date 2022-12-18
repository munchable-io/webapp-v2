import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { incrementQty } from "../../../users/users.slice";
import { StyledCounter } from "./Counter.styled";

const Counter = ({ id, count }) => {
	const dispatch = useDispatch();

	return (
		<StyledCounter>
			<div>
				<FiMinus onClick={() => dispatch(incrementQty({ id, amt: -1 }))} />
			</div>
			<div>
				<p className="xs">{count}</p>
			</div>
			<div>
				<FiPlus onClick={() => dispatch(incrementQty({ id, amt: 1 }))} />
			</div>
		</StyledCounter>
	);
};

export default Counter;
