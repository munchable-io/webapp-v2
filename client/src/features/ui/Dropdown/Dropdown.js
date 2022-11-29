import { useEffect, useState } from "react";
import { DropdownContent, DropdownWrapper } from "./Dropdown.styled";

const Dropdown = (props) => {
	const [filteredOptions, setFilteredOptions] = useState([]);
	useEffect(() => {
		let results = [];
		for (let option of props?.options) {
			if (
				props?.value.toLowerCase() !== option?.name?.toLowerCase() &&
				option?.name?.toLowerCase().includes(props?.value.toLowerCase())
			) {
				results.push(option);
			}
		}
		setFilteredOptions(results);
	}, [props?.options, props?.value]);

	return (
		<DropdownWrapper
			color={props?.color}
			width={props?.width}
			show={filteredOptions.length > 0}
			disabled={props?.disabled}
		>
			<input
				disabled={props?.disabled || false}
				type="text"
				placeholder={props?.placeholder}
				value={props?.value}
				onChange={(e) => props?.setValue(e.target.value)}
			/>
			<DropdownContent show={filteredOptions.length > 0}>
				{filteredOptions.map((option) => {
					return (
						<li key={option.id} onClick={() => props?.setValue(option.name)}>
							{option.name}
						</li>
					);
				})}
			</DropdownContent>
		</DropdownWrapper>
	);
};

export default Dropdown;
