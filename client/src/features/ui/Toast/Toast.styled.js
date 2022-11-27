import styled from "styled-components";

export const ToastWrapper = styled.div`
	position: fixed;
	padding: 1rem;
	width: 500px;
	bottom: 1rem;
	left: 0;
	display: flex;
	flex-direction: column-reverse;
	row-gap: 0.5rem;
	max-height: 50%;
	overflow-y: hidden;

	@media (max-width: 500px) {
		width: 100%;
	}
`;

export const StyledToast = styled.div`
	padding: 0.5rem;
	width: 100%;
	border-radius: 8px;
	box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
	color: black;

	div.toastContainer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-left: 4px solid
			${(props) => (props.color ? props.color : "var(--primary-gray)")};
		padding: 0.25rem 1rem;

		div.toastContent {
			display: flex;
			column-gap: 1rem;
			align-items: center;

			svg {
				color: ${(props) =>
					props.color ? props.color : "var(--primary-gray)"};
			}
		}

		svg {
			width: 1.8rem;
			height: 1.8rem;
			color: var(--primary-light-gray);

			&:hover {
				cursor: pointer;
			}
		}
	}
`;
