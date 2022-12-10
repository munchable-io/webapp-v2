import styled from "styled-components";

export const ToastsWrapper = styled.ul`
	position: fixed;
	bottom: 0;
	left: 0;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	row-gap: 0.5rem;
	max-width: 500px;

	@media (max-width: 500px) {
		padding: 1rem;
	}
`;

export const StyledToast = styled.li`
	background: rgba(255, 255, 255, 0.8);
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	list-style: none;
	padding: 0.5rem;
	border-radius: 8px;
`;

export const ToastBody = styled.div`
	background: white;
	border-left: 3px solid
		${(props) => (props.color ? props.color : "var(--primary-gray)")};
	display: flex;
	align-items: center;
	justify-content: space-between;

	div.icon {
		width: 1.2rem;
		height: 1.2rem;
		margin: 0 0.75rem;

		svg {
			color: ${(props) => (props.color ? props.color : "var(--primary-gray)")};
			width: 100%;
			height: 100%;
		}
	}

	div.content {
		max-width: 300px;
		padding-right: 1rem;

		p.second {
			color: gray;
		}
	}

	div.exitIcon {
		width: 1rem;
		height: 1rem;

		svg {
			width: 100%;
			height: 100%;
			color: gray;

			&:hover {
				cursor: pointer;
			}
		}
	}
`;
