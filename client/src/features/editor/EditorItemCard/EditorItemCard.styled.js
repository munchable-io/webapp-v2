import styled from "styled-components";

export const StyledEditorItemCard = styled.section`
	background: #faf9f6;
	border-radius: 8px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;
	transition: all 0.25s;

	&:hover {
		cursor: pointer;
		box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
	}

	div.itemCardRow {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
