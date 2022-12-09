import styled from "styled-components";

export const SummaryWrapper = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 0.25rem;
`;

export const SummaryRow = styled.li`
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-between;

	p {
		font-weight: 300;

		&.description {
			color: gray;
		}
		&.content {
			color: black;
		}
	}
`;
