import { FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeOptionChoice } from "../../item/item.slice";
import { StyledChoice } from "./Choice.styled";

const Choice = ({ choice, optionId }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(removeOptionChoice({ optionId, choiceId: choice._id }));
	};

	return (
		<StyledChoice>
			<p>
				{choice.name}: ${choice.cost.toFixed(2)}
			</p>
			<FiX onClick={handleClick} />
		</StyledChoice>
	);
};

export default Choice;
