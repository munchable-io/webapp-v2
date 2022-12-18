import { forwardRef } from "react";
import {
	FiEdit,
	FiHome,
	FiList,
	FiLogIn,
	FiLogOut,
	FiUser,
	FiX,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { isNavOpen, setIsNavOpen } from "../Header/Header.slice";
import { NavBody, NavHeader, StyledNav } from "./Nav.styled";
import { getUser } from "../../auth/auth.slice";
import useLogout from "../../auth/useLogout";
import { addToast } from "../Toast/Toast.slice";

const Nav = forwardRef((props, ref) => {
	const user = useSelector(getUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const logout = useLogout();
	const navOpen = useSelector(isNavOpen);

	const handleLogout = async () => {
		try {
			await logout();
			dispatch(setIsNavOpen(false));
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

	const activeStyle = {
		background: "rgba(255, 255, 255, 0.1)",
	};

	return (
		<StyledNav ref={ref} open={navOpen}>
			<NavHeader>
				<FiX onClick={() => dispatch(setIsNavOpen(false))} />
				<h3>Welcome!</h3>
			</NavHeader>
			<NavBody>
				<NavLink
					to="/"
					onClick={() => dispatch(setIsNavOpen(false))}
					style={({ isActive }) => (isActive ? activeStyle : undefined)}
				>
					<FiHome />
					<p>Menu</p>
				</NavLink>
				{["user", "manager"].includes(user?.role) && (
					<>
						<NavLink
							to="/orders"
							onClick={() => dispatch(setIsNavOpen(false))}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							<FiList />
							<p>Orders</p>
						</NavLink>
						<NavLink
							to="/account"
							onClick={() => dispatch(setIsNavOpen(false))}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							<FiUser />
							<p>Account</p>
						</NavLink>
					</>
				)}
				{["manager"].includes(user?.role) && (
					<NavLink
						to="/editor"
						onClick={() => dispatch(setIsNavOpen(false))}
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						<FiEdit />
						<p>Menu Editor</p>
					</NavLink>
				)}
				{!user?.accessToken && (
					<NavLink
						to="/login"
						onClick={() => dispatch(setIsNavOpen(false))}
						style={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						<FiLogIn />
						<p>Login</p>
					</NavLink>
				)}
				{user?.accessToken && (
					<NavLink onClick={() => handleLogout()}>
						<FiLogOut />
						<p>Logout</p>
					</NavLink>
				)}
			</NavBody>
		</StyledNav>
	);
});

export default Nav;
