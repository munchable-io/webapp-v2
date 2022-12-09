import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getUser } from "./auth.slice";
import useRefreshToken from "./useRefreshToken";

const PersistLogin = () => {
	const [isLoading, setIsLoading] = useState(true);
	const auth = useSelector(getUser);
	const refresh = useRefreshToken();

	useEffect(() => {
		let isMounted = true;

		const verifyRefreshToken = async () => {
			try {
				await refresh();
			} catch (err) {
				console.error(err);
			} finally {
				isMounted && setIsLoading(false);
			}
		};

		!auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);

		return () => {
			isMounted = false;
		};
	}, []); // eslint-disable-line

	return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistLogin;
