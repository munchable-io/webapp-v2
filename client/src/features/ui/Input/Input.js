import { InputWrapper } from "./Input.styled";

const Input = (props) => {
	return (
		<InputWrapper
			width={props?.width}
			disabled={props?.disabled}
			color={props?.color}
		>
			<input
				disabled={props?.disabled || false}
				required
				type={props?.type}
				placeholder=""
				value={props?.value}
				onChange={props?.setValue}
			/>
			{!props?.disabled && props?.icon && props?.value.length > 0 && (
				<span onClick={props?.onIconClick}>{props?.icon}</span>
			)}
			<label>{props?.disabled || props?.label}</label>
		</InputWrapper>
	);
};

export default Input;
