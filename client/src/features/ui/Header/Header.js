import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import CheckoutModal from "../../checkout/CheckoutModal";
import Nav from "../Nav/Nav";
import { getOrderSize } from "../../users/users.slice";
import useComponentVisible from "../hooks/useComponentVisible";
import { HeaderCart, StyledHeader } from "./Header.styled";

const Header = () => {
	const hasOrder = useSelector(getOrderSize) > 0;

	const {
		ref: navModalRef,
		isComponentVisible: isNavVisible,
		setIsComponentVisible: setIsNavVisible,
	} = useComponentVisible(false);

	const {
		ref: checkoutRef,
		isComponentVisible: isCheckoutVisible,
		setIsComponentVisible: setIsCheckoutVisible,
	} = useComponentVisible(false);

	return (
		<StyledHeader>
			<div className="container headerWrapper">
				<div className="headerLeft">
					<FiMenu onClick={() => setIsNavVisible(!isNavVisible)} />
				</div>
				<div className="headerCenter">
					<h1>Lucky Dynasty</h1>
				</div>
				<div className="headerRight">
					<HeaderCart
						hasOrder={hasOrder}
						onClick={() => setIsCheckoutVisible(!isCheckoutVisible)}
					>
						<FiShoppingCart />
					</HeaderCart>
				</div>
			</div>

			{/* nav modal */}
			{isNavVisible && (
				<Nav
					ref={navModalRef}
					modifyModal={(state) => setIsNavVisible(state)}
					setIsNavVisible={setIsNavVisible}
				/>
			)}

			{/* checkout modal */}
			{isCheckoutVisible && (
				<CheckoutModal
					ref={checkoutRef}
					modifyModal={(state) => setIsCheckoutVisible(state)}
					setIsCheckoutVisible={setIsCheckoutVisible}
				/>
			)}
		</StyledHeader>
	);
};

export default Header;
