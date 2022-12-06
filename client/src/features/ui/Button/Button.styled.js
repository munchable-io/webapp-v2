import styled from "styled-components";

export const StyledButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 1rem;
	width: ${(props) => (props.width ? props.width : "fit-content")};
	border: none;
	background: ${(props) => (props.color ? props.color : "var(--primary-gray)")};
	color: white;
	padding: 0.5rem 2rem;
	font-size: ${(props) => (props.fontSize ? props.fontSize : "0.8rem")};
	font-weight: bold;
	border-radius: 8px;
	transition: all 0.1s;

	&:hover {
		cursor: pointer;
		box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.5);
	}

	&:active {
		scale: 0.95;
	}

	svg {
		animation: rotate 1s linear infinite;
	}

	@keyframes rotate {
		to {
			transform: rotate(360deg);
		}
	}
`;
