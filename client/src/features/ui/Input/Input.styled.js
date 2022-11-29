import styled from "styled-components";

export const InputWrapper = styled.div`
	width: ${(props) => (props.width ? props.width : "min-content")};
	position: relative;
	padding-top: 0.5rem;

	input {
		width: ${(props) => (props.width ? props.width : "initial")};
		padding: 0.25rem 1rem;
		font-size: 1rem;
		border: 1px solid
			${(props) => (props.color ? props.color : "var(--primary-gray)")};
		color: ${(props) => (props.color ? props.color : "black")};
		outline: none;
		border-radius: 8px;

		&:hover {
			cursor: ${(props) => (props.disabled ? "not-allowed" : "inherit")};
		}

		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		&[type="number"] {
			-moz-appearance: textfield;
		}
	}

	input:focus ~ label,
	input:valid ~ label {
		transform: translateX(0.65rem) translateY(0rem);
		background: white;
		padding: 0 0.25rem;
		font-size: 0.8rem;
	}

	label {
		position: absolute;
		top: 0;
		left: 0;
		padding: 0.75rem 1rem;
		font-size: 1rem;
		pointer-events: none;
		transition: all 0.25s;
		color: ${(props) => (props.color ? props.color : "var(--primary-gray)")};
	}

	svg {
		position: absolute;
		top: 1rem;
		right: 1rem;
		color: ${(props) => (props.color ? props.color : "var(--primary-gray)")};
		width: 1rem;
		height: 1rem;

		&:hover {
			cursor: pointer;
		}
	}
`;
