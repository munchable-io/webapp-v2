import { BiLoaderAlt } from "react-icons/bi";
import { StyledButton } from "./Button.styled";

const Button = (props) => {
	const handleClick = () => {
		if (!props?.loading && props?.onClick) {
			props?.onClick();
		}
	};
	return (
		<StyledButton
			onClick={handleClick}
			color={props?.color}
			fontSize={props?.fontSize}
			width={props?.width}
		>
			{props?.value}
			{props?.loading && <BiLoaderAlt />}
		</StyledButton>
	);
};

export default Button;
