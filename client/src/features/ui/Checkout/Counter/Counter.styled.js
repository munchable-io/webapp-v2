import styled from "styled-components";

export const StyledCounter = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid #4f4f4f;
	border-radius: 4px;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.2rem;
		height: 1.2rem;

		&:first-child {
			border-right: 1px solid #4f4f4f;
		}

		&:last-child {
			border-left: 1px solid #4f4f4f;
		}
	}

	svg {
		width: 100% !important;
		height: 100% !important;
		color: #4f4f4f;
		padding: 0.2rem;

		&:hover {
			background: #4f4f4f;
			color: black;
		}
	}
`;
