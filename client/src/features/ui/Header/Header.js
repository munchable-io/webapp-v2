import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { StyledHeader } from "./Header.styled";

const Header = () => {
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
					<FiShoppingCart />
				</div>
			</StyledHeader>
		</div>
	);
};

export default Header;
