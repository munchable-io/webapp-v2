import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutModalOpen } from "../../restaurant/restaurant.slice";
import { getOrderSize } from "../../users/users.slice";
import { HeaderCart, StyledHeader } from "./Header.styled";

const Header = () => {
	const dispatch = useDispatch();
	const hasOrder = useSelector(getOrderSize) > 0;

	return (
		<StyledHeader>
			<div className="container">
				<div className="headerLeft">
					<FiMenu />
				</div>
				<div className="headerCenter">
					<h1>Lucky Dynasty</h1>
				</div>
				<div className="headerRight">
					<HeaderCart
						hasOrder={hasOrder}
						onClick={() => {
							dispatch(setCheckoutModalOpen(true));
						}}
					>
						<FiShoppingCart />
					</HeaderCart>
				</div>
			</div>
		</StyledHeader>
	);
};

export default Header;
