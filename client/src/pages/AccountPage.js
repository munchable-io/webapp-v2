import { useSelector } from "react-redux";
import { getUser } from "../features/auth/auth.slice";

const AccountPage = () => {
	const user = useSelector(getUser);
	console.log(user);

	return (
		<div className="container">
			<h2>Account Settings</h2>
			<p>Account settings go here.</p>
		</div>
	);
};

export default AccountPage;
