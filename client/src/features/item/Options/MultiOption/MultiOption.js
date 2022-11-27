import Choice from "../Choice/Choice";
import { OptionChoices, StyledOption } from "../Option.styled";

const MultiOption = ({ option, options, setOptions }) => {
	const setSelectedChoice = (choice) => {
		const newOptions = [...options];
		const optionIndex = newOptions.findIndex(
			(target) => target._id === option._id
		);
		let choiceCount = 0;
		for (let choice of newOptions[optionIndex].choices) {
			if (choice.selected) {
				choiceCount++;
			}
		}
		const choiceIndex = newOptions[optionIndex].choices.findIndex(
			(target) => target._id === choice._id
		);
		if (newOptions[optionIndex].choices[choiceIndex].selected) {
			newOptions[optionIndex].choices[choiceIndex].selected = false;
		} else {
			if (choiceCount < option.maxQty) {
				newOptions[optionIndex].choices[choiceIndex].selected = true;
			}
		}
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

export default MultiOption;
