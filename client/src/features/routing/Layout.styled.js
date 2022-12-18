import styled from "styled-components";

export const AppWrapper = styled.div`
	width: 100%;
	background: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0;
`;

export const AppContainer = styled.main`
	width: 100%;
	background: white;
	padding: 1rem 2rem;

	@media (max-width: 768px) {
		padding: 0.5rem 1rem;
	}
	@media (max-width: 400px) {
		padding: 0.25rem 0.5rem;
	}
`;
