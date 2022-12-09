import { Link } from "react-router-dom";

const NavItem = ({ to, children, modifyModal, onClick }) => {
	const handleClick = () => {
		modifyModal(false);
		onClick && onClick();
	};
	return (
		<Link onClick={handleClick} to={to || ""}>
			{children}
		</Link>
	);
};

export default NavItem;
