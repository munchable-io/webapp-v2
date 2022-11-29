import styled from "styled-components";

export const TextboxWrapper = styled.div`
	position: relative;
	resize: none;
	width: ${(props) => (props.width ? props.width : "100%")};
	height: ${(props) => (props.height ? props.height : "10rem")};
	padding-top: 0.5rem;

	span {
		position: absolute;
		bottom: 0.25rem;
		right: 1.5rem;
		color: ${(props) => (props.color ? props.color : "var(--primary-gray)")};
		font-size: 0.8rem;
		letter-spacing: -1px;
		font-weight: 600;
	}
`;

export const StyledTextbox = styled.textarea`
	width: 100%;
	height: 100%;
	resize: none;
	border: 1px solid
		${(props) => (props.color ? props.color : "var(--primary-gray)")};
	color: ${(props) => (props.color ? props.color : "black")};
	border-radius: 8px;
	outline: none;
	padding: 1rem;
	font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
	line-height: ${(props) => (props.fontSize ? props.fontSize : "1rem")};

	&::placeholder {
		color: var(--primary-gray);
	}

	&:hover {
		cursor: ${(props) => (props.disabled ? "not-allowed" : "search")};
	}
`;
