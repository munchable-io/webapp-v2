import { useEffect } from "react";
import { useState } from "react";
import { FiMenu, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../../nav/Nav";
import { setCheckoutModalOpen } from "../../restaurant/restaurant.slice";
import { getOrderSize } from "../../users/users.slice";
import useComponentVisible from "../hooks/useComponentVisible";
import { HeaderCart, StyledHeader } from "./Header.styled";

const Header = () => {
	const dispatch = useDispatch();
	const hasOrder = useSelector(getOrderSize) > 0;
	const [navModalOpen, setNavModalOpen] = useState(false);

	const {
		ref: navModalRef,
		isComponentVisible: isNavVisible,
		setIsComponentVisible: setIsNavVisible,
	} = useComponentVisible(navModalOpen);

	useEffect(() => {
		setIsNavVisible(navModalOpen);
	}, [navModalOpen]); // eslint-disable-line

	return (
		<StyledHeader>
			<div className="container headerWrapper">
				<div className="headerLeft">
					<FiMenu onClick={() => setNavModalOpen(!navModalOpen)} />
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
			{isNavVisible && (
				<Nav
					ref={navModalRef}
					modifyModal={(state) => setIsNavVisible(state)}
					setIsNavVisible={setIsNavVisible}
				/>
			)}
		</StyledHeader>
	);
};

export default Header;
