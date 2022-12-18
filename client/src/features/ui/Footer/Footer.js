import { StyledFooter } from "./Footer.styled";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../auth/auth.slice";

const Footer = () => {
	const user = useSelector(getUser);

	return (
		<StyledFooter>
			{user?.role === "user" && (
				<Link to="/restaurantLogin">Create Restaurant</Link>
			)}
		</StyledFooter>
	);
};

export default Footer;
