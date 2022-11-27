import { StyledTextbox, TextboxWrapper } from "./Textbox.styled";

const Textbox = (props) => {
	return (
		<TextboxWrapper
			fontSize={props?.fontSize}
			color={props?.color}
			width={props?.width}
			height={props?.height}
		>
			<StyledTextbox
				color={props?.color}
				placeholder={props?.placeholder}
				disabled={props?.disabled}
				value={props?.value}
				onChange={(e) =>
					e.target.value.length <= props?.maxChars &&
					props?.setValue(e.target.value)
				}
			></StyledTextbox>
			{props?.value.length > 0 && (
				<span>{`${props?.value.length} / ${props?.maxChars}`}</span>
			)}
		</TextboxWrapper>
	);
};

export default Textbox;
