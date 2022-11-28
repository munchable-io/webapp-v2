import { StyledChoice } from "../Option.styled";

const Choice = ({ choice, setSelectedChoice, selected }) => {
	const handleClick = () => {
		setSelectedChoice(choice);
	};

	return (
		<StyledChoice selected={selected} onClick={handleClick}>
			<p>{choice?.name}</p>
			{choice?.cost !== 0 && <p>${choice?.cost?.toFixed(2)}</p>}
		</StyledChoice>
	);
};

export default Choice;
