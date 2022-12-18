import styled from "styled-components";

export const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	left: ${(props) => (props.open ? "0px" : "-350px")};
	width: 350px;
	height: 100%;
	background: var(--primary-dark-gray);
	color: white;
	transition: all 0.15s ease-in-out;

	svg {
		color: white;
	}

	@media (max-width: 350px) {
		width: 100%;
	}
`;

export const NavHeader = styled.header`
	padding: 1rem 2rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	column-gap: 0.5rem;

	svg {
		width: 1.5rem;
		height: 1.5rem;

		&:hover {
			cursor: pointer;
		}
	}

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

export const NavBody = styled.main`
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;

	a {
		color: white;
		display: flex;
		align-items: center;
		column-gap: 1rem;
		padding: 0.5rem;
		border-radius: 5px;
		transition: all 0.25s;

		svg {
			width: 1.3rem;
			height: 1.3rem;
		}

		&:hover {
			text-decoration: none;
			background: rgba(255, 255, 255, 0.1);
		}
	}

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
