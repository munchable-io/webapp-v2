import styled from "styled-components";

export const StyledNav = styled.nav`
	background: #1e272e;
	height: 100%;
	width: 300px;
	border-radius: 8px;
	padding: 0.5rem 1rem;
	color: white;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	row-gap: 1rem;
	position: sticky;
	position: -webkit-sticky;
	top: 0;
	transition: all 0.25s;
`;

export const NavBody = styled.main`
	h4 {
		margin: 1rem 0 2rem 0;
	}
`;

export const NavFooter = styled.footer``;

export const NavList = styled.nav`
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;

	a {
		transition: all 0.25s;
		display: flex;
		align-items: center;
		column-gap: 0.25rem;
		color: inherit;
		padding: 0.5rem 0.25rem;
		border-radius: 5px;
		width: 100%;
		height: 100%;

		p {
			font-size: 0.85rem;
			font-weight: 500;
		}

		svg {
			color: inherit;
			height: 1rem;
		}

		&:hover {
			text-decoration: none;
			cursor: pointer;
			background: rgba(255, 255, 255, 0.15);
		}
	}
`;
