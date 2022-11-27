import { useSelector } from "react-redux";
import { getAllItems, getItemsError, getItemsState } from "./item.slice";
import { StyledItemList } from "./Item.styled";
import ItemCard from "./ItemCard";

const ItemList = ({ modifyModal }) => {
	const items = {
		items: useSelector(getAllItems),
		status: useSelector(getItemsState),
		error: useSelector(getItemsError),
	};

	// create content based on status
	let content;
	if (items.status === "loading") {
		content = <h3>Loading...</h3>;
	} else if (items.status === "failed") {
		content = <h3>{items.error}</h3>;
	} else if (items.status === "succeeded") {
		content = items.items.map((item) => (
			<ItemCard key={item._id} item={item} modifyModal={modifyModal} />
		));
	} else {
		content = <h3>Unknown status: {items.status}</h3>;
	}

	// return items list
	return <StyledItemList>{content}</StyledItemList>;
};

export default ItemList;
