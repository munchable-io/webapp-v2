import { FiX } from "react-icons/fi";
import { StyledChoice } from "./Choice.styled";

const Choice = ({ choice }) => {
	return (
		<StyledChoice>
			<p>
				{choice.name}: ${choice.cost.toFixed(2)}
			</p>
			<FiX />
		</StyledChoice>
	);
};

export default Choice;
