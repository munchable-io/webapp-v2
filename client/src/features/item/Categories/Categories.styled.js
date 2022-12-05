import styled from "styled-components";

export const StyledCategories = styled.ul`
	display: flex;
	width: 100%;
	overflow-x: scroll;

	p {
		margin: 0 1rem;
		white-space: nowrap;

		&:hover {
			cursor: pointer;
		}
	}

	p.selected {
		text-decoration: underline;
		font-weight: bold;
	}
`;
