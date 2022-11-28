import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setCheckoutModalOpen } from "../../restaurant/restaurant.slice";
import { StyledHeader } from "./Header.styled";

const Header = () => {
	const dispatch = useDispatch();
	return (
		<div className="container">
			<StyledHeader>
				<div className="headerLeft">
					<FiMenu />
				</div>
				<div className="headerCenter">
					<h1>Lucky Dynasty</h1>
				</div>
				<div className="headerRight">
					<FiShoppingCart
						onClick={() => {
							dispatch(setCheckoutModalOpen(true));
						}}
					/>
				</div>
			</StyledHeader>
		</div>
	);
};

export default Header;
