import { forwardRef } from "react";
import { FiX } from "react-icons/fi";
import { StyledNav } from "./Nav.styled";

const Nav = forwardRef((props, ref) => {
	return (
		<StyledNav>
			<div className="container">
				<FiX onClick={() => props.modifyModal(false)} />
			</div>
		</StyledNav>
	);
});

export default Nav;
