import styled from "styled-components";

export const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 350px;
	height: 100%;
	background: white;

	svg {
		&:hover {
			cursor: pointer;
		}
	}

	@media (max-width: 350px) {
		width: 100%;
	}
`;

export const NavItems = styled.div`
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	row-gap: 0.25rem;

	a {
		list-style: none;
		display: flex;
		align-items: center;
		column-gap: 0.5rem;
		color: var(--primary-dark-gray);
		padding: 0.5rem;
		border-radius: 8px;
		transition: all 0.25s;

		svg {
			width: 1.2rem;
			height: 1.2rem;
			color: var(--primary-dark-gray);
			transition: all 0.25s;
		}

		&:hover {
			text-decoration: none;
			color: var(--primary-blue);
			background: rgba(9, 132, 227, 0.1);

			svg {
				color: var(--primary-blue);
			}
		}
	}
`;
