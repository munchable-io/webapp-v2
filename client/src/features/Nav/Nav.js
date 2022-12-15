import {
	FiEdit,
	FiFileText,
	FiList,
	FiLogIn,
	FiLogOut,
	FiUser,
} from "react-icons/fi";
import { NavBody, NavFooter, NavList, StyledNav } from "./Nav.styled";
import NavItem from "./NavItem";

const Nav = () => {
	return (
		<StyledNav>
			<NavBody>
				<h4>Welcome, Kimmy!</h4>
				<NavList>
					<NavItem>
						<FiFileText />
						<p>Menu</p>
					</NavItem>
					<NavItem>
						<FiEdit />
						<p>Menu Editor</p>
					</NavItem>
					<NavItem>
						<FiList />
						<p>Orders</p>
					</NavItem>
					<NavItem>
						<FiUser />
						<p>Account Settings</p>
					</NavItem>
				</NavList>
			</NavBody>
			<NavFooter>
				<NavList>
					<NavItem>
						<FiLogIn />
						<p>Sign In</p>
					</NavItem>
					<NavItem>
						<FiLogOut />
						<p>Logout</p>
					</NavItem>
				</NavList>
			</NavFooter>
		</StyledNav>
	);
};

export default Nav;
