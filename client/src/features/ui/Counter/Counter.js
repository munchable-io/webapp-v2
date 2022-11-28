import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { StyledCounter } from "./Counter.styled";

const Counter = ({ value, increment, decrement }) => {
	return (
		<StyledCounter>
			<FiMinusCircle onClick={decrement} />
			<p>Qty: {value}</p>
			<FiPlusCircle onClick={increment} />
		</StyledCounter>
	);
};

export default Counter;
