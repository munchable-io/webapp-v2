import styled from "styled-components";

export const DropdownWrapper = styled.div`
	padding-top: 0.5rem;
	width: ${(props) => (props.width ? props.width : "min-content")};
	position: relative;

	input {
		width: ${(props) => (props.width ? props.width : "initial")};
		padding: 0.25rem 1rem;
		font-size: 1rem;
		border-radius: 8px;
		outline: none;
		border: 1px solid
			${(props) => (props.color ? props.color : "var(--primary-gray)")};
		color: ${(props) => (props.color ? props.color : "black")};
		border-bottom-left-radius: ${(props) => (props.show ? "0" : "8px")};
		border-bottom-right-radius: ${(props) => (props.show ? "0" : "8px")};

		&::placeholder {
			color: var(--primary-gray);
		}

		&:hover {
			cursor: ${(props) => (props.disabled ? "not-allowed" : "search")};
		}
	}
`;

export const DropdownContent = styled.ul`
	display: ${(props) => (props.show ? "block" : "none")};
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	border: 1px solid var(--primary-gray);
	padding: 0.25rem 1rem;
	max-height: 6rem;
	overflow-y: scroll;

	li {
		list-style: none;
		padding: 0.25rem 0;
		transition: all 0.25s;

		&:hover {
			cursor: pointer;
			font-weight: bold;
		}
	}
`;
