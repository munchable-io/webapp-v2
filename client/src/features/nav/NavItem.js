import { Link } from "react-router-dom";

const NavItem = ({ to, children, closeNav }) => {
	return (
		<Link onClick={closeNav} to={to || ""}>
			{children}
		</Link>
	);
};

export default NavItem;
