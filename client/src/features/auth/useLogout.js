import { useDispatch } from "react-redux";
import axios from "../api/axios";
import { setUser } from "./auth.slice";

const useLogout = () => {
	const dispatch = useDispatch();

	const logout = async () => {
		dispatch(setUser({}));

		try {
			await axios.get("/users/logout", {
				withCredentials: true,
			});
		} catch (err) {
			console.error(err);
		}
	};

	return logout;
};

export default useLogout;
