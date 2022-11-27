import styled from "styled-components";

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 1rem;
	border-bottom: 2px solid var(--primary-light-gray);

	div {
		display: flex;
		align-items: center;
	}

	svg {
		&:hover {
			cursor: pointer;
		}
	}

	h1 {
		color: var(--restaurant-primary);
		text-align: center;
	}
`;
