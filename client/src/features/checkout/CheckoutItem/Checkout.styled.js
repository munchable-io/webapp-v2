import styled from "styled-components";

export const StyledCheckoutItem = styled.section`
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;
	background: whitesmoke;
	padding: 1rem 0.5rem;
	border-radius: 4px;
`;

export const CheckoutItemSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	h4 {
		display: flex;
		align-items: center;
		column-gap: 0.5rem;
	}

	div.row {
		display: flex;
		column-gap: 0.5rem;
	}

	div.column {
		display: flex;
		flex-direction: column;
		row-gap: 0.5rem;
	}

	svg {
		width: 1.2rem;
		height: 1.2rem;

		&:hover {
			cursor: pointer;
		}
	}
`;
