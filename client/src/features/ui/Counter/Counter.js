import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { StyledCounter } from "./Counter.styled";

const Counter = ({ value, setValue }) => {
	const decrement = () => {
		if (value > 1) {
			setValue(value - 1);
		}
	};
	const increment = () => {
		setValue(value + 1);
	};
	return (
		<StyledCounter>
			<FiMinusCircle onClick={decrement} />
			<p>Qty: {value}</p>
			<FiPlusCircle onClick={increment} />
		</StyledCounter>
	);
};

export default Counter;
