import { useSelector } from "react-redux";
import CheckoutModal from "../features/checkout/CheckoutModal";
import ItemModal from "../features/item/ItemModal";
import ItemsList from "../features/item/ItemsList";
import { getCheckoutModalOpen } from "../features/restaurant/restaurant.slice";
import useComponentVisible from "../features/ui/hooks/useComponentVisible";

const RestaurantHome = () => {
	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(false);
	const isCheckoutModalOpen = useSelector(getCheckoutModalOpen);

	return (
		<>
			{isComponentVisible && (
				<ItemModal
					ref={ref}
					modifyModal={(state) => setIsComponentVisible(state)}
				/>
			)}
			{isCheckoutModalOpen && <CheckoutModal />}
			<div className="container">
				<h2>Menu</h2>
				<ItemsList modifyModal={(state) => setIsComponentVisible(state)} />
			</div>
		</>
	);
};

export default RestaurantHome;
