import { useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import useComponentVisible from "../hooks/useComponentVisible";
import Nav from "../Nav/Nav";
import Cart from "./Cart/Cart";
import { isNavOpen, setIsNavOpen } from "./Header.slice";
import { StyledHeader } from "./Header.styled";

const Header = () => {
	const dispatch = useDispatch();
	const navOpen = useSelector(isNavOpen);

	const {
		ref: navRef,
		isComponentVisible: isNavVisible,
		setIsComponentVisible: setIsNavVisible,
	} = useComponentVisible(false);

	useEffect(() => {
		setIsNavVisible(navOpen);
	}, [navOpen]); // eslint-disable-line

	useEffect(() => {
		dispatch(setIsNavOpen(isNavVisible));
	}, [isNavVisible]); // eslint-disable-line

	return (
		<StyledHeader>
			<section>
				<FiMenu onClick={() => dispatch(setIsNavOpen(true))} />
			</section>
			<section>
				<Cart />
			</section>
			<Nav ref={navRef} />
		</StyledHeader>
	);
};

export default Header;
