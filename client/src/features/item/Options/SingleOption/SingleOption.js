import Choice from "../Choice/Choice";
import { OptionChoices, StyledOption } from "../Option.styled";

const SingleOption = ({ option, options, setOptions }) => {
	const setSelectedChoice = (choice) => {
		const newOptions = [...options];
		const optionIndex = newOptions.findIndex(
			(target) => target._id === option._id
		);
		newOptions[optionIndex].selectedChoice = choice;
		for (let choice of newOptions[optionIndex].choices) {
			choice.selected = false;
		}
		const choiceIndex = newOptions[optionIndex].choices.findIndex(
			(target) => target._id === choice._id
		);
		newOptions[optionIndex].choices[choiceIndex].selected = true;
		setOptions(newOptions);
	};

	const choices = option?.choices.map((choice) => (
		<Choice
			key={choice._id}
			choice={choice}
			selected={choice.selected}
			setSelectedChoice={setSelectedChoice}
		/>
	));

	return (
		<StyledOption>
			<p>
				{option?.name} (<span className="sm">{option?.description}</span>)
				{option?.required && <span className="red">*</span>}
			</p>
			<OptionChoices>{choices}</OptionChoices>
		</StyledOption>
	);
};

export default SingleOption;
