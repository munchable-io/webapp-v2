import axios from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser } from "./auth.slice";

const useRefreshToken = () => {
	const dispatch = useDispatch();
	const auth = useSelector(getUser);

	const refresh = async () => {
		try {
			// get new access token
			const response = await axios.get("/users/refresh", {
				withCredentials: true,
			});

			// get access token
			const accessToken = response.data.accessToken;
			const role = response.data.role;

			// give user updated access token
			dispatch(setUser({ ...auth, accessToken, role }));

			return accessToken;
		} catch (err) {
			return err;
		}
	};

	return refresh;
};

export default useRefreshToken;
