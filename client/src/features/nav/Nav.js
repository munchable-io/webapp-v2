import { FiEdit, FiHome, FiLogIn, FiX } from "react-icons/fi";
import { forwardRef } from "react";
import { NavItems, StyledNav } from "./Nav.styled";
import NavItem from "./NavItem";

const Nav = forwardRef((props, ref) => {
	return (
		<StyledNav ref={ref}>
			<div className="container">
				<FiX onClick={() => props.modifyModal(false)} />
				<NavItems>
					<NavItem
						to="/"
						closeNav={() => {
							props.setNavIsVisible(false);
						}}
					>
						<FiHome />
						<p className="sm">Home</p>
					</NavItem>
					<NavItem
						to="/editor"
						closeNav={() => {
							props.setNavIsVisible(false);
						}}
					>
						<FiEdit />
						<p className="sm">Menu Editor</p>
					</NavItem>
					<NavItem to="/login" closeNav={() => props.setNavIsVisible(false)}>
						<FiLogIn />
						<p className="sm">Register / Login</p>
					</NavItem>
				</NavItems>
			</div>
		</StyledNav>
	);
});

export default Nav;
