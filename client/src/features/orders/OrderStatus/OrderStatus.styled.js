import styled from "styled-components";

export const StatusWrapper = styled.div`
	background: rgba(0, 0, 0, 0.05);
	width: min-content;
	padding: 0.1rem 0.5rem;
	font-size: 0.6rem;
	font-weight: bold;
	border-radius: 100px;
	color: ${(props) => (props.color ? props.color : "black")};
`;
