import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import Dropdown from "../../ui/Dropdown/Dropdown";
import Input from "../../ui/Input/Input";
import Select from "../../ui/Select/Select";
import Choice from "../Choice/Choice";
import {
	EditorOptionBody,
	EditorOptionHeader,
	StyledEditorOption,
} from "./EditorOption.styled";

const EditorOption = ({ option }) => {
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
		<Choice key={choice._id} choice={choice} />
	));

	return (
		<StyledEditorOption open={optionOpen}>
			<EditorOptionHeader onClick={() => setOptionOpen(!optionOpen)}>
				<p>{!optionOpen ? option?.name : "Edit Option"}</p>
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
					<p className="bold">Choices:</p>
					{choices}
				</div>
			</EditorOptionBody>
		</StyledEditorOption>
	);
};

export default EditorOption;
