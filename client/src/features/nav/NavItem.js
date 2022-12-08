import { Link } from "react-router-dom";

const NavItem = ({ to, children, modifyModal }) => {
	const handleClick = () => {
		modifyModal(false);
	};
	return (
		<Link onClick={handleClick} to={to || ""}>
			{children}
		</Link>
	);
};

export default NavItem;
