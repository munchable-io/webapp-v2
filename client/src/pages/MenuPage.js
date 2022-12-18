import ItemModal from "../features/item/ItemModal";
import ItemsList from "../features/item/ItemsList";
import useComponentVisible from "../features/ui/hooks/useComponentVisible";
import { MenuWrapper } from "../features/menu/menu.styled";

const MenuPage = () => {
	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(false);

	return (
		<MenuWrapper>
			{/* page content  */}
			<ItemsList modifyModal={(state) => setIsComponentVisible(state)} />

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
