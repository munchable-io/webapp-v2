import { useDispatch } from "react-redux";
import { setSelectedItem } from "../../../app/item.slice";
import { StyledEditorItemCard } from "./EditorItemCard.styled";

const EditorItemCard = ({ item, modifyModal }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setSelectedItem(item._id));
		modifyModal(true);
	};

	return (
		<StyledEditorItemCard onClick={handleClick}>
			<h4>{item?.name}</h4>
			<p className="xs">{item?.description.substring(0, 50)}...</p>
			<div className="itemCardrow">
				<p className="xs">${item?.price}</p>
			</div>
		</StyledEditorItemCard>
	);
};

export default EditorItemCard;
