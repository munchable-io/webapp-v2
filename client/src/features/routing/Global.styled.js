import styled from "styled-components";

export const AppWrapper = styled.main`
	position: fixed;
	top: 0;
	left: 0;
	overflow-y: scroll;
	width: 100%;
	height: 100%;
	background: var(--primary-off-white);
	padding: 0.25rem;
	display: flex;
	column-gap: 0.25rem;
`;

export const AppSection = styled.section`
	width: 100%;
	position: relative;
`;
