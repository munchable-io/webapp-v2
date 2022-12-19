import { useEffect } from "react";
import { FiInfo, FiMenu } from "react-icons/fi";
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
import {
	HeaderContent,
	HeaderSection,
	HeaderTag,
	StyledHeader,
} from "./Header.styled";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
	const dispatch = useDispatch();
	const navOpen = useSelector(isNavOpen);
	const checkoutOpen = useSelector(isCheckoutOpen);

	const [infoModalOpen, setInfoModalOpen] = useState(false);

	// create ref for nav modal
	const {
		ref: navRef,
		isComponentVisible: isNavVisible,
		setIsComponentVisible: setIsNavVisible,
	} = useComponentVisible(false);

	// create ref for checkout modal
	const {
		ref: checkoutRef,
		isComponentVisible: isCheckoutVisible,
		setIsComponentVisible: setIsCheckoutVisible,
	} = useComponentVisible(false);

	// update nav modal on click outside element
	useEffect(() => {
		setIsNavVisible(navOpen);
	}, [navOpen]); // eslint-disable-line
	useEffect(() => {
		dispatch(setIsNavOpen(isNavVisible));
	}, [isNavVisible]); // eslint-disable-line

	// update checkout modal on click outside element
	useEffect(() => {
		setIsCheckoutVisible(checkoutOpen);
	}, [checkoutOpen]); // eslint-disable-line
	useEffect(() => {
		dispatch(setIsCheckoutOpen(isCheckoutVisible));
	}, [isCheckoutVisible]); // eslint-disable-line

	return (
		<>
			<StyledHeader>
				<div className="headerRow">
					<HeaderSection>
						<FiMenu onClick={() => dispatch(setIsNavOpen(true))} />
					</HeaderSection>
					<HeaderSection>
						<h2>
							<Link to="">Lucky Dynasty</Link>
						</h2>
					</HeaderSection>
					<HeaderSection>
						<Cart onClick={() => dispatch(setIsCheckoutOpen(true))} />
					</HeaderSection>
				</div>
				<Nav ref={navRef} />
				<Checkout ref={checkoutRef} />
			</StyledHeader>
			<HeaderContent>
				<div className="contentFlex">
					<h3>1110 Emanuel Cleaver II Blvd. Kansas City, MO</h3>
				</div>
				<div className="contentRow">
					<p>Open today until 10pm</p>
					<FiInfo onClick={() => setInfoModalOpen(!infoModalOpen)} />
				</div>
				<div className="contentRow">
					<HeaderTag>Delicious Chinese food, made fresh every day!</HeaderTag>
				</div>
			</HeaderContent>
		</>
	);
};

export default Header;
