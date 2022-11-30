import { FiCheck } from "react-icons/fi";
import { StyledBox, StyledCheckbox } from "./Checkbox.styled";

const Checkbox = (props) => {
	return (
		<StyledCheckbox>
			<StyledBox selected={props?.value} onClick={props?.setValue}>
				<FiCheck />
			</StyledBox>
			<p>{props?.label}</p>
		</StyledCheckbox>
	);
};

export default Checkbox;
