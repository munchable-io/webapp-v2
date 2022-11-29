import styled from "styled-components";

export const StyledChoice = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: all 0.25s;

	&:hover {
		background: var(--primary-light-gray);
		cursor: pointer;
	}
`;
