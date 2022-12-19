import styled from "styled-components";

export const StyledHeader = styled.header`
	background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)),
		url("https://www.gannett-cdn.com/presto/2021/08/10/NPPP/049f8a18-4cee-4b83-b4db-eae7108a6edf-Pagoda_Kitchen_rendering_.jpg");
	background-size: cover;
	background-position: middle;
	background-attachment: fixed;
	background-repeat: no-repeat;
	position: sticky;
	top: 0;
	transition: all 0.25s ease-in-out;

	div.headerRow {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
		position: relative;
		color: white;

		@media (max-width: 768px) {
			padding: 0.5rem 1rem;

			section {
				svg {
					width: 2rem;
					height: 2rem;
				}
			}
		}

		@media (max-width: 400px) {
			padding: 0.25rem 0.5rem;
		}
	}
`;

export const HeaderSection = styled.section`
	color: white;
	display: ${(props) => (props.notShrink ? "none" : "flex")};
	justify-items: center;
	transition: all 0.25s;

	svg {
		color: white;
		width: 1.5rem;
		height: 1.5rem;

		&:hover {
			cursor: pointer;
		}
	}

	a {
		text-decoration: none;
		color: inherit;
	}
`;

export const HeaderContent = styled.div`
	background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)),
		url("https://www.gannett-cdn.com/presto/2021/08/10/NPPP/049f8a18-4cee-4b83-b4db-eae7108a6edf-Pagoda_Kitchen_rendering_.jpg");
	background-size: cover;
	background-position: middle;
	background-attachment: fixed;
	background-repeat: no-repeat;
	border-radius: 8px;
	padding: 1rem 2rem;
	color: white;
	display: ${(props) => (props.shrink ? "none" : "flex")};
	flex-direction: column;
	row-gap: 1rem;

	div.contentFlex {
		display: flex;
		flex-direction: row;
		column-gap: 1rem;
		align-items: flex-end;

		@media (max-width: 768px) {
			flex-direction: column;
			align-items: flex-start;
		}
	}

	div.contentRow {
		display: flex;
		flex-direction: row;
		column-gap: 0.25rem;
		align-items: center;

		svg {
			width: 1.2rem;
			color: white;

			&:hover {
				cursor: pointer;
			}
		}
	}

	@media (max-width: 768px) {
		padding: 0.5rem 1rem;

		section {
			svg {
				width: 2rem;
				height: 2rem;
			}
		}
	}

	@media (max-width: 400px) {
		padding: 0.25rem 0.5rem;
	}
`;

export const HeaderTag = styled.span`
	color: white;
	font-style: italic;
`;
