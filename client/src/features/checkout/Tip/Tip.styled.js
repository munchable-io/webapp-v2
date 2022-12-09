import styled from "styled-components";

export const StyledTip = styled.section`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
`;

export const TipContainer = styled.ul`
	display: flex;
	column-gap: 1rem;
`;

export const StyledTipItem = styled.li`
	list-style: none;
	background: ${(props) => (props.selected ? "var(--primary-blue)" : "white")};
	border: 1px solid
		${(props) =>
			props.selected ? "var(--primary-blue)" : "var(--primary-light-blue)"};
	color: ${(props) => (props.selected ? "white" : "var(--primary-light-blue)")};
	padding: 0.5rem 0;
	width: 100%;
	text-align: center;
	border-radius: 4px;
	transition: all 0.25s;

	&:hover {
		cursor: pointer;
		border: 1px solid var(--primary-blue);
		color: ${(props) => (props.selected ? "white" : "var(--primary-blue)")};
	}
`;
