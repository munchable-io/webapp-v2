import { FiEdit, FiFileText, FiLogIn, FiLogOut, FiX } from "react-icons/fi";
import { forwardRef, useState } from "react";
import { NavItems, StyledNav } from "./Nav.styled";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";
import useLogout from "../../auth/useLogout";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../auth/auth.slice";
import useRefreshToken from "../../auth/useRefreshToken";
import { useEffect } from "react";
import { addToast } from "../Toast/Toast.slice";
import Loading from "../Loading/Loading";

const Nav = forwardRef(({ modifyModal }, ref) => {
	const dispatch = useDispatch();
	const refresh = useRefreshToken();
	const auth = useSelector(getUser);
	const navigate = useNavigate();
	const logout = useLogout();

	const [isLoading, setIsLoading] = useState(true);

	// load in persisting auth
	useEffect(() => {
		let isMounted = true;

		const loadAuth = async () => {
			try {
				await refresh();
			} catch (err) {
				console.error(err);
			} finally {
				isMounted && setIsLoading(false);
			}
		};

		!auth?.accessToken ? loadAuth() : setIsLoading(false);

		return () => {
			isMounted = false;
		};
	}, []); // eslint-disable-line

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
		<StyledNav ref={ref}>
			<div className="container">
				<FiX onClick={() => modifyModal(false)} />
				{isLoading ? (
					<Loading size="50px" />
				) : (
					<NavItems>
						<NavItem to="/" modifyModal={modifyModal}>
							<FiFileText />
							<p className="sm">Menu</p>
						</NavItem>
						{["admin", "manager"].includes(auth?.role) && (
							<NavItem to="/editor" modifyModal={modifyModal}>
								<FiEdit />
								<p className="sm">Menu Editor</p>
							</NavItem>
						)}
						{!auth?.accessToken && (
							<NavItem to="/login" modifyModal={modifyModal}>
								<FiLogIn />
								<p className="sm">Register / Login</p>
							</NavItem>
						)}
						{auth?.accessToken && (
							<NavItem onClick={handleLogout} modifyModal={modifyModal}>
								<FiLogOut />
								<p className="sm">Logout</p>
							</NavItem>
						)}
					</NavItems>
				)}
			</div>
		</StyledNav>
	);
});

export default Nav;
