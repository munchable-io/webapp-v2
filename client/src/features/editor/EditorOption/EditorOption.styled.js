import styled from "styled-components";

export const StyledEditorOption = styled.section`
	background: white;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	row-gap: ${(props) => (props.open ? "0.5rem" : "0")};
	width: 100%;
	transition: all 0.25s;
	box-shadow: 0 0 8px 0px rgba(0, 0, 0, 0.3);
`;

export const EditorOptionHeader = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1rem;

	&:hover {
		cursor: pointer;
	}

	svg {
		transition: all 0.25s;

		&:hover {
			color: var(--primary-bright-red);
		}
	}
`;

export const EditorOptionBody = styled.div`
	padding: 0 1rem;
	transition: all 0.25s;
	display: ${(props) => (props.open ? "auto" : "none")};
	padding: ${(props) => (props.open ? "0.5rem 1rem" : "0")};
`;
