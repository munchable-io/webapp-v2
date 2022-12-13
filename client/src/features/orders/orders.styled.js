import styled from "styled-components";

export const OrderTable = styled.table`
	width: 100%;
	box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	font-size: 0.85rem;
	font-weight: 300;
	margin: 3rem auto;
	border-collapse: collapse;

	tr {
		border-bottom: 1px solid #f0f0f0;
	}

	thead {
		font-weight: 500;
		font-size: 0.7rem;
		color: gray;
		background: #f7f7f7;

		td {
			padding: 0.5rem 1rem;
		}
		td:first-child {
			border-top-left-radius: 8px;
		}
		td:last-child {
			border-top-right-radius: 8px;
		}
	}

	tbody {
		tr:last-child {
			border: none;
		}
		td {
			padding: 0.5rem 1rem;

			&.td-light {
				color: gray;
			}
			&.td-bold {
				font-weight: 400;
			}
		}
	}
`;
