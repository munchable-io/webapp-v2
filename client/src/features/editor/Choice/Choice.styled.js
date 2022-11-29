import styled from "styled-components";

export const StyledChoice = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: all 0.25s;
	padding: 0.5rem;

	&:hover {
		background: var(--primary-light-gray);
		cursor: pointer;
	}
`;
