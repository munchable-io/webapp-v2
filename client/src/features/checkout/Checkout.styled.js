import styled from "styled-components";

export const CheckoutWrapper = styled.main`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.1);
`;

export const StyledCheckout = styled.section`
	position: fixed;
	top: 0;
	right: 0;
	width: 500px;
	height: 100%;
	background: white;

	div.container {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
	}

	@media (max-width: 500px) {
		width: 100%;
	}
`;

export const CheckoutHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;

	svg {
		width: 1.6rem;
		height: 1.6rem;

		&:hover {
			cursor: pointer;
		}
	}
`;

export const CheckoutBody = styled.main`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
`;
