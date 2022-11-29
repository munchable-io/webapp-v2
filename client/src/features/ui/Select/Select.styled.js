import styled from "styled-components";

export const SelectWrapper = styled.div`
	width: ${(props) => (props.width ? props.width : "initial")};
	padding-top: 0.5rem;
`;

export const SelectHeader = styled.div`
	padding: 0.25rem 1rem;
	width: 100%;
	font-size: 1rem;
	padding: 0.25rem 1rem;
	outline: none;
	border-radius: 8px;
	border-bottom-left-radius: ${(props) => (props.open ? "0" : "8px")};
	border-bottom-right-radius: ${(props) => (props.open ? "0" : "8px")};
	border: 1px solid
		${(props) => (props.color ? props.color : "var(--primary-gray)")};
	display: flex;
	align-items: center;
	justify-content: space-between;

	p {
		color: black;
	}

	svg {
		color: var(--primary-gray);
		transition: all 0.25s;
		transform: rotate(${(props) => (props.open ? "180deg" : "0deg")});
	}

	&:hover {
		cursor: pointer;
	}
`;

export const SelectBody = styled.ul`
	border: 1px solid var(--primary-gray);
	border-bottom-right-radius: 8px;
	border-bottom-left-radius: 8px;
	transition: all 0.25s;
	display: ${(props) => (props.open ? "auto" : "none")};

	li {
		list-style: none;
		padding: 0.25rem 1rem;
		transition: all 0.25s;

		&:hover {
			cursor: pointer;
			background: var(--primary-light-gray);
		}
	}
`;
