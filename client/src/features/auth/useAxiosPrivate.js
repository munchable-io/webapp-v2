import { useEffect } from "react";
import { useSelector } from "react-redux";
import { axiosPrivate } from "../api/axios";
import { getUser } from "./auth.slice";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
	const refresh = useRefreshToken();
	const auth = useSelector(getUser);

	useEffect(() => {
		const requestIntercept = axiosPrivate.interceptors.request.use(
			(config) => {
				if (!config.headers["Authorization"]) {
					config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
				}
				return config;
			},
			(error) => {
				Promise.reject(error);
			}
		);

		// set new auth token expiration
		const responseIntercept = axiosPrivate.interceptors.response.use(
			(response) => response,
			async (error) => {
				const prevRequest = error?.config;
				if (error?.response?.status === 403 && !prevRequest?.sent) {
					prevRequest.sent = true;
					const newAccessToken = await refresh();
					prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
					return axiosPrivate(prevRequest);
				}
				return Promise.reject(error);
			}
		);

		return () => {
			axiosPrivate.interceptors.response.eject(responseIntercept);
			axiosPrivate.interceptors.request.eject(requestIntercept);
		};
	}, [auth, refresh]);

	return axiosPrivate;
};

export default useAxiosPrivate;
