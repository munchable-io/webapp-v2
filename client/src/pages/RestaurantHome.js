import ItemModal from "../features/item/ItemModal";
import ItemsList from "../features/item/ItemsList";
import useComponentVisible from "../features/ui/hooks/useComponentVisible";

const RestaurantHome = () => {
	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(false);

	return (
		<>
			{isComponentVisible && (
				<ItemModal
					ref={ref}
					modifyModal={(state) => setIsComponentVisible(state)}
				/>
			)}
			<div className="container">
				<ItemsList modifyModal={(state) => setIsComponentVisible(state)} />
			</div>
		</>
	);
};

export default RestaurantHome;
