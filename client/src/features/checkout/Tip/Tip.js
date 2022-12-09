import { useSelector } from "react-redux";
import { getTip } from "../../users/users.slice";
import { StyledTip, TipContainer } from "./Tip.styled";
import TipItem from "./TipItem";

const Tip = () => {
	const tip = useSelector(getTip);

	const options = [
		{ name: "None", value: 0 },
		{ name: "15%", value: 0.15 },
		{ name: "18%", value: 0.18 },
		{ name: "22%", value: 0.22 },
	];

	const tips = options.map((option, id) => (
		<TipItem key={id} option={option} selected={option.value === tip} />
	));

	return (
		<StyledTip>
			<h4>Select Tip</h4>
			<TipContainer>{tips}</TipContainer>
		</StyledTip>
	);
};

export default Tip;
