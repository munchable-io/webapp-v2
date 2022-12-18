import styled from "styled-components";

export const StyledHeader = styled.header`
	background: var(--primary-off-white);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 2rem;
	position: relative;

	section {
		display: flex;
		justify-items: center;

		svg {
			width: 1.5rem;
			height: 1.5rem;

			&:hover {
				cursor: pointer;
			}
		}
	}

	@media (max-width: 768px) {
		padding: 0.5rem 1rem;

		section {
			svg {
				width: 2rem;
				height: 2rem;
			}
		}
	}

	@media (max-width: 400px) {
		padding: 0.25rem 0.5rem;
	}
`;
