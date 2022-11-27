import styled from "styled-components";

export const StyledItemList = styled.main`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 2rem;

	@media (max-width: 1280px) {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	@media (max-width: 380px) {
		grid-template-columns: 1fr;
	}
`;
