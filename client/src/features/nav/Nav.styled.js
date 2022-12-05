import styled from "styled-components";

export const StyledNav = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 500px;
	height: 100%;
	background: white;

	svg {
		&:hover {
			cursor: pointer;
		}
	}

	@media (max-width: 500px) {
		width: 100%;
	}
`;
