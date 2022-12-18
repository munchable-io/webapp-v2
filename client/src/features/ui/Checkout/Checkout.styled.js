import styled from "styled-components";

export const StyledCheckout = styled.section`
	position: fixed;
	top: 0;
	right: ${(props) => (props.open ? "0px" : "-450px")};
	width: 450px;
	height: 100%;
	background: var(--primary-dark-gray);
	color: white;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	transition: all 0.15s ease-in-out;
	display: flex;
	flex-direction: column;

	svg {
		color: white;
	}

	@media (max-width: 450px) {
		width: 100%;
	}
`;

export const CheckoutHeader = styled.header`
	padding: 1rem 2rem;
	height: min-content;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 768px) {
		padding: 0.5rem 1rem;

		svg {
			width: 2rem;
			height: 2rem;
		}
	}

	@media (max-width: 400px) {
		padding: 0.25rem 0.5rem;
	}
`;

export const CheckoutBody = styled.main`
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;

	@media (max-width: 768px) {
		padding: 0.5rem 1rem;
	}

	@media (max-width: 400px) {
		padding: 0.25rem 0.5rem;
	}
`;
