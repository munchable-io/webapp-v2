import styled from "styled-components";
import restaurantImg from "../../static/restaurant.jpeg";

export const RestaurantHomeWrapper = styled.div`
	div.heroImg {
		border-radius: 8px;
		background-image: linear-gradient(
				rgba(194, 54, 22, 0.5),
				rgba(194, 54, 22, 0.5)
			),
			url(${restaurantImg});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		padding: 1rem;
		color: white;
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
	}
`;

export const RestaurantHomeInfo = styled.ul`
	display: flex;
	align-items: center;
	gap: 1rem;

	li {
		background: var(--primary-light-gray);
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		list-style: none;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: black;

		svg {
			width: 0.8rem;
			height: 0.8rem;
		}
	}

	@media (max-width: 550px) {
		align-items: flex-start;
		flex-direction: column;
	}
`;
