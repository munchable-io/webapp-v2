import styled from "styled-components";

export const StyledCounter = styled.div`
	display: flex;
	align-items: center;
	color: var(--primary-blue);

	svg {
		width: 1.4rem;
		height: 1.4rem;
		color: var(--primary-blue);
		border-radius: 1rem;

		&:hover {
			cursor: pointer;
			background: var(--primary-blue);
			color: white;
		}
	}

	p {
		padding: 0.25rem 0.5rem;
		text-align: center;
	}
`;
