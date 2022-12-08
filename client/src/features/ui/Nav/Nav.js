import { FiEdit, FiFileText, FiLogIn, FiX } from "react-icons/fi";
import { forwardRef } from "react";
import { NavItems, StyledNav } from "./Nav.styled";
import NavItem from "./NavItem";

const Nav = forwardRef(({ modifyModal }, ref) => {
	return (
		<StyledNav ref={ref}>
			<div className="container">
				<FiX onClick={() => modifyModal(false)} />
				<NavItems>
					<NavItem to="/" modifyModal={modifyModal}>
						<FiFileText />
						<p className="sm">Menu</p>
					</NavItem>
					<NavItem to="/editor" modifyModal={modifyModal}>
						<FiEdit />
						<p className="sm">Menu Editor</p>
					</NavItem>
					<NavItem to="/login" modifyModal={modifyModal}>
						<FiLogIn />
						<p className="sm">Register / Login</p>
					</NavItem>
				</NavItems>
			</div>
		</StyledNav>
	);
});

export default Nav;
