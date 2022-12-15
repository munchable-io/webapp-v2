import styled from "styled-components";

export const StyledNav = styled.nav`
	background: #1e272e;
	position: relative;
	width: 300px;
	height: 100%;
	border-radius: 8px;
	padding: 0.5rem 1rem;
	color: white;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	row-gap: 1rem;
`;

export const NavBody = styled.main`
	h4 {
		margin: 2rem 0;
	}
`;

export const NavFooter = styled.footer``;

export const NavList = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;
`;

export const StyledNavItem = styled.li`
	list-style: none;
	color: inherit;
	padding: 0.5rem 0.25rem;
	border-radius: 5px;
	display: flex;
	align-items: center;
	column-gap: 0.25rem;
	transition: all 0.25s;

	p {
		font-size: 0.85rem;
		font-weight: 500;
	}

	svg {
		color: inherit;
		height: 1rem;
	}

	&:hover {
		cursor: pointer;
		background: rgba(255, 255, 255, 0.2);
	}
`;
