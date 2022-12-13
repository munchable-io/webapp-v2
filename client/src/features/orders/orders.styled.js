import styled from "styled-components";

export const OrderTableWrapper = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 3rem;
	margin: 3rem 0;
`;

export const OrderTable = styled.table`
	width: 100%;
	box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	font-size: 0.85rem;
	font-weight: 300;
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

export const OrderForm = styled.form`
	display: flex;
	column-gap: 1rem;
`;

export const OrderInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: min-content;

	label {
		font-size: 0.7rem;
		color: gray;
	}

	input,
	select {
		font-size: 0.7rem;
	}

	select {
		outline: none;
		padding: 0.5rem;
		border-radius: 8px;
		width: 200px;
	}
`;
