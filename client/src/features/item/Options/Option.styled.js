import styled from "styled-components";

export const StyledOption = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;

	span.red {
		color: var(--primary-red);
	}
`;

export const OptionChoices = styled.ul`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.5rem;

	@media (max-width: 380px) {
		grid-template-columns: 1fr;
	}
`;

export const StyledChoice = styled.li`
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid var(--primary-gray);
	padding: 0.25rem 0.5rem;
	border-radius: 4px;
	transition: all 0.25s;
	background: ${(props) => (props.selected ? "var(--primary-blue)" : "none")};
	color: ${(props) => (props.selected ? "white" : "black")};

	&:hover {
		cursor: pointer;
		background: var(--primary-light-blue);
		color: white;
		border-color: var(--primary-light-blue);
	}
`;
