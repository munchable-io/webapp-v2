import { FiEdit, FiFileText, FiLogIn, FiLogOut, FiX } from "react-icons/fi";
import { forwardRef } from "react";
import { NavItems, StyledNav } from "./Nav.styled";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";
import useLogout from "../../auth/useLogout";

const Nav = forwardRef(({ modifyModal }, ref) => {
	const navigate = useNavigate();
	const logout = useLogout();

	const handleLogout = async () => {
		try {
			await logout();
			navigate("/");
		} catch (err) {
			console.error(err);
		}
	};

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
					<NavItem onClick={handleLogout} modifyModal={modifyModal}>
						<FiLogOut />
						<p className="sm">Logout</p>
					</NavItem>
				</NavItems>
			</div>
		</StyledNav>
	);
});

export default Nav;
