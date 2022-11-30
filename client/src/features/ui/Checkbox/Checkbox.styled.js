import styled from "styled-components";

export const StyledCheckbox = styled.div`
	padding: 0.25rem 0;
	margin-top: 0.5rem;
	display: flex;
	align-items: center;
	column-gap: 0.75rem;
`;

export const StyledBox = styled.span`
	display: block;
	width: 1rem;
	height: 1rem;
	border: ${(props) =>
		props.selected ? "none" : "1px solid var(--primary-gray)"};
	background: ${(props) => (props.selected ? "var(--primary-blue)" : "none")};
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	transition: all 0.25s;

	&:hover {
		cursor: pointer;
	}

	svg {
		display: ${(props) => (props.selected ? "block" : "none")};
		width: 90%;
		height: 90%;
		color: white;
	}
`;
