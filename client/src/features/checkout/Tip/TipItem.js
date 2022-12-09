import { useDispatch } from "react-redux";
import { setTip } from "../../users/users.slice";
import { StyledTipItem } from "./Tip.styled";

const TipItem = ({ option, selected }) => {
	const dispatch = useDispatch();

	return (
		<StyledTipItem
			onClick={() => dispatch(setTip(option.value))}
			selected={selected}
		>
			<p>{option.name}</p>
		</StyledTipItem>
	);
};

export default TipItem;
