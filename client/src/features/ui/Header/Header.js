import { useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "../Checkout/Checkout";
import useComponentVisible from "../hooks/useComponentVisible";
import Nav from "../Nav/Nav";
import Cart from "./Cart/Cart";
import {
	isCheckoutOpen,
	isNavOpen,
	setIsCheckoutOpen,
	setIsNavOpen,
} from "./Header.slice";
import { StyledHeader } from "./Header.styled";

const Header = () => {
	const dispatch = useDispatch();
	const navOpen = useSelector(isNavOpen);
	const checkoutOpen = useSelector(isCheckoutOpen);

	const {
		ref: navRef,
		isComponentVisible: isNavVisible,
		setIsComponentVisible: setIsNavVisible,
	} = useComponentVisible(false);

	const {
		ref: checkoutRef,
		isComponentVisible: isCheckoutVisible,
		setIsComponentVisible: setIsCheckoutVisible,
	} = useComponentVisible(false);

	useEffect(() => {
		setIsNavVisible(navOpen);
	}, [navOpen]); // eslint-disable-line

	useEffect(() => {
		dispatch(setIsNavOpen(isNavVisible));
	}, [isNavVisible]); // eslint-disable-line

	useEffect(() => {
		setIsCheckoutVisible(checkoutOpen);
	}, [checkoutOpen]); // eslint-disable-line

	useEffect(() => {
		dispatch(setIsCheckoutOpen(isCheckoutVisible));
	}, [isCheckoutVisible]); // eslint-disable-line

	return (
		<StyledHeader>
			<section>
				<FiMenu onClick={() => dispatch(setIsNavOpen(true))} />
			</section>
			<section>
				<Cart onClick={() => dispatch(setIsCheckoutOpen(true))} />
			</section>
			<Nav ref={navRef} />
			<Checkout ref={checkoutRef} />
		</StyledHeader>
	);
};

export default Header;
