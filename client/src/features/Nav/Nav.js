import {
	FiEdit,
	FiFileText,
	FiList,
	FiLogIn,
	FiLogOut,
	FiUser,
} from "react-icons/fi";
import { NavBody, NavFooter, NavList, StyledNav } from "./Nav.styled";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../auth/auth.slice";
import { addToast } from "../ui/Toast/Toast.slice";
import useLogout from "../auth/useLogout";

const Nav = () => {
	const user = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const logout = useLogout();

	const activeStyle = {
		backgroundColor: "rgba(255, 255, 255, 0.25)",
	};

	const handleLogout = async () => {
		try {
			await logout();
			navigate("/");
			dispatch(
				addToast({
					status: "info",
					header: "Account Update:",
					body: "You have just been logged out.",
				})
			);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<StyledNav>
			<NavBody>
				{user?.firstName ? <h4>Hi, {user?.firstName}!</h4> : <h4>Welcome!</h4>}
				<NavList>
					<NavLink
						to="/"
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						<FiFileText />
						<p>Menu</p>
					</NavLink>
					{["manager"].includes(user?.role) && (
						<NavLink
							to="/editor"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							<FiEdit />
							<p>Menu Editor</p>
						</NavLink>
					)}
					{["user", "manager"].includes(user?.role) && (
						<>
							<NavLink
								to="/orders"
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
							>
								<FiList />
								<p>Orders</p>
							</NavLink>
							<NavLink
								to="/account"
								style={({ isActive }) => (isActive ? activeStyle : undefined)}
							>
								<FiUser />
								<p>My Account</p>
							</NavLink>
						</>
					)}
				</NavList>
			</NavBody>
			<NavFooter>
				<NavList>
					{!user?.accessToken && (
						<NavLink
							to="/login"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							<FiLogIn />
							<p>Sign In</p>
						</NavLink>
					)}
					{user?.accessToken && (
						<NavLink onClick={handleLogout}>
							<FiLogOut />
							<p>Log Out</p>
						</NavLink>
					)}
				</NavList>
			</NavFooter>
		</StyledNav>
	);
};

export default Nav;
