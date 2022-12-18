import styled from "styled-components";

export const StyledItem = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	column-gap: 1rem;
	border-bottom: 1px solid #4f4f4f;
	padding-bottom: 2rem;

	&:last-child {
		border: none;
	}

	section {
		column-gap: 0.5rem;
		border-right: 1px solid #4f4f4f;

		&:first-child {
			padding-right: 0.5rem;
		}

		&:last-child {
			border: none;
		}

		p {
			&.title {
				font-weight: 500;
			}
			&.desc {
				color: darkgray;
				font-weight: 300;

				span {
					&.gray {
						color: #474747;
					}
				}
			}
		}

		img {
			width: 3rem;
			height: 3rem;
			border-radius: 4px;
		}

		&.flex-column {
			height: 100%;
			justify-content: space-between;
		}
	}
`;
