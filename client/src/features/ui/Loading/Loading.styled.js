import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from{ transform: rotate(0deg); }
    to{ transform: rotate(360deg); }
`;

export const LoadingWrapper = styled.section`
	padding: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		width: ${(props) => (props.size ? props.size : "1.5rem")};
		height: ${(props) => (props.size ? props.size : "1.5rem")};
		animation: ${rotate} 2s linear infinite;
	}
`;
