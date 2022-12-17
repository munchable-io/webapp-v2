import { StyledFooter } from "./Footer.styled";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<StyledFooter>
			<Link to="/restaurantLogin">Restaurant Login</Link>
		</StyledFooter>
	);
};

export default Footer;
