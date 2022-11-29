import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addOptionChoice } from "../../../app/item.slice";
import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import Select from "../../ui/Select/Select";
import Choice from "../Choice/Choice";
import {
	EditorOptionBody,
	EditorOptionHeader,
	StyledEditorOption,
} from "./EditorOption.styled";

const EditorOption = ({ option }) => {
	const dispatch = useDispatch();

	const [optionOpen, setOptionOpen] = useState(false);
	const [optionName, setOptionName] = useState(option?.name || "");
	const [optionSelectionType, setOptionSelectionType] = useState(
		option?.selectionType || ""
	);
	const optionDescription =
		optionSelectionType === "single"
			? "Please select one"
			: "Select all that apply";

	const onOptionNameChange = (e) => setOptionName(e.target.value);

	const choices = option?.choices.map((choice) => (
		<Choice key={choice._id} choice={choice} optionId={option._id} />
	));

	const [choiceName, setChoiceName] = useState("");
	const [choiceCost, setChoiceCost] = useState(0);

	const addNewChoice = () => {
		if (choiceName) {
			dispatch(
				addOptionChoice({
					id: option._id,
					choice: { name: choiceName, cost: choiceCost },
				})
			);
			setChoiceName("");
			setChoiceCost(0);
		} else {
			alert("Please enter a choice name");
		}
	};

	return (
		<StyledEditorOption open={optionOpen}>
			<EditorOptionHeader onClick={() => setOptionOpen(!optionOpen)}>
				<p>
					{!optionOpen
						? option?.name
							? option?.name
							: "New Option"
						: "Edit Option"}
				</p>
				<FiTrash2 />
			</EditorOptionHeader>
			<EditorOptionBody open={optionOpen}>
				<Input
					label="Option Name:"
					width="100%"
					value={optionName}
					setValue={onOptionNameChange}
				/>
				<Select
					placeholder="Selection Type:"
					options={[
						{ id: 1, name: "single" },
						{ id: 2, name: "multi" },
					]}
					value={optionSelectionType}
					setValue={setOptionSelectionType}
				/>
				<div>
					<div className="row">
						<p className="bold">Choices:</p>
					</div>
					<div className="flex-column">
						<Input
							type="text"
							label="Choice Name:"
							width="100%"
							value={choiceName}
							setValue={(e) => setChoiceName(e.target.value)}
						/>
						<Input
							type="number"
							label="Choice Cost"
							width="100%"
							value={choiceCost}
							setValue={(e) => setChoiceCost(e.target.value)}
						/>
						<Button
							value="Add New Choice"
							fontSize="0.55rem"
							onClick={addNewChoice}
						/>
					</div>
					{choices}
				</div>
			</EditorOptionBody>
		</StyledEditorOption>
	);
};

export default EditorOption;
