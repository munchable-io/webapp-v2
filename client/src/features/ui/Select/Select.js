import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { SelectBody, SelectHeader, SelectWrapper } from "./Select.styled";

const Select = (props) => {
	const [selectOpen, setSelectOpen] = useState(false);
	const options = props?.options.map((option) => (
		<li
			key={option.id}
			onClick={() => {
				props?.setValue(option?.name);
				setSelectOpen(false);
			}}
		>
			{option?.name}
		</li>
	));

	return (
		<SelectWrapper width={props?.width}>
			<SelectHeader
				open={selectOpen}
				onClick={() => setSelectOpen(!selectOpen)}
			>
				<p>{props?.value || props?.placeholder}</p>
				<FiChevronDown />
			</SelectHeader>
			<SelectBody open={selectOpen}>{options}</SelectBody>
		</SelectWrapper>
	);
};

export default Select;
