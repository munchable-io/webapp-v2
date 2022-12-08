import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { getUser } from "./auth.slice";

const RequireAuth = ({ allowedRoles }) => {
	const auth = useSelector(getUser);
	const location = useLocation();

	return (
		<>
			{/* if user is logged in, go to outlet */}
			{/* else if logged in w/o permission, go to unauth. page */}
			{/* if not logged in to go login page */}
			{allowedRoles.find((role) => auth?.role === role) ? (
				<Outlet />
			) : auth?.accessToken ? (
				<Navigate to="/unauthorized" state={{ from: location }} replace />
			) : (
				<Navigate to="/login" state={{ from: location }} replace />
			)}
		</>
	);
};

export default RequireAuth;
