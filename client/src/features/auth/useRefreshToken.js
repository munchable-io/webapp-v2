import axios from "../api/axios";
import { useDispatch } from "react-redux";
import { setUser } from "./auth.slice";

const useRefreshToken = () => {
	const dispatch = useDispatch();

	const refresh = async () => {
		try {
			// get new access token
			const response = await axios.get("/users/refresh", {
				withCredentials: true,
			});

			// give user updated access token
			dispatch(setUser({ ...response.data }));

			return response.data.accessToken;
		} catch (err) {
			return err;
		}
	};

	return refresh;
};

export default useRefreshToken;
