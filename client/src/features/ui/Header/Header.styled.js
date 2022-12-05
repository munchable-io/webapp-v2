import styled, { keyframes } from "styled-components";

const blink = keyframes`
	0%{
		opacity: 1;
	}
	55%{
		opacity: 0;
	}
	100%{
		opacity: 1;
	}
`;

export const StyledHeader = styled.header`
	background: white;
	position: sticky;
	top: 0;

	div.headerWrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 1rem;
		border-bottom: 2px solid var(--primary-light-gray);

		div {
			display: flex;
			align-items: center;
		}

		svg {
			&:hover {
				cursor: pointer;
			}
		}

		h1 {
			color: var(--restaurant-primary);
			text-align: center;
		}
	}
`;

export const HeaderCart = styled.span`
	width: 1.6rem;
	height: 1.6rem;
	position: relative;

	svg {
		width: 100%;
		height: 100%;
	}

	&::after {
		display: ${(props) => (props.hasOrder ? "block" : "none")};
		content: "";
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 10px;
		top: -5px;
		right: -5px;
		background: var(--primary-bright-red);
		animation: ${blink} 1.5s linear infinite;
	}
`;
