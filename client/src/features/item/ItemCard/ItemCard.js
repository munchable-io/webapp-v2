import { StyledItemCard } from "./ItemCard.styled";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../../../app/item.slice";

const ItemCard = ({ item, modifyModal }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setSelectedItem(item._id));
		modifyModal(true);
	};

	return (
		<StyledItemCard onClick={handleClick}>
			<h4>{item?.name}</h4>
			<p className="xs">{item?.description.substring(0, 50)}...</p>
			<div className="itemCardRow">
				<p className="xs">${item?.price}</p>
			</div>
		</StyledItemCard>
	);
};

export default ItemCard;
