import styled from "styled-components";

export const StyledCart = styled.div`
	background: #c23616;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	column-gap: 0.5rem;
	padding: 0.25rem 1rem;
	border-radius: 100px;

	span {
		font-size: 0.75rem;
	}

	svg {
		color: white;
		width: 1rem !important;
	}

	&:hover {
		cursor: pointer;
	}
`;
