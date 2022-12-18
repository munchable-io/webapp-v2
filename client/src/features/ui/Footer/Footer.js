import { StyledFooter } from "./Footer.styled";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<StyledFooter>
			<Link to="/restaurantLogin">Create Restaurant</Link>
		</StyledFooter>
	);
};

export default Footer;
