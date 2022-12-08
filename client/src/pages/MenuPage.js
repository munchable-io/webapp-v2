import ItemModal from "../features/item/ItemModal";
import ItemsList from "../features/item/ItemsList";
import useComponentVisible from "../features/ui/hooks/useComponentVisible";
import { MenuInfo, MenuWrapper } from "../features/menu/menu.styled";
import { FiClock, FiMapPin, FiWatch } from "react-icons/fi";

const MenuPage = () => {
	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(false);

	return (
		<MenuWrapper>
			{/* page content  */}
			<div className="container flex-column">
				<div className="heroImg">
					<p className="xs">Chinese Fast Food</p>
					<h2>Lucky Dynasty</h2>
					<MenuInfo>
						<li>
							<FiMapPin />
							<p className="xs">Address Goes Here</p>
						</li>
						<li>
							<FiClock />
							<p className="xs">Hours Go Here</p>
						</li>
						<li>
							<FiWatch />
							<p className="xs">Estimated Wait: 30 min</p>
						</li>
					</MenuInfo>
				</div>
				<ItemsList modifyModal={(state) => setIsComponentVisible(state)} />
			</div>

			{/* item modal  */}
			{isComponentVisible && (
				<ItemModal
					ref={ref}
					modifyModal={(state) => setIsComponentVisible(state)}
				/>
			)}
		</MenuWrapper>
	);
};

export default MenuPage;
