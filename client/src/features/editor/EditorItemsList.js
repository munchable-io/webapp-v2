import { useSelector } from "react-redux";
import { getAllItems, getItemsError, getItemsState } from "../item/item.slice";
import { StyledEditorItemList } from "./EditorItem.styled";
import EditorItemCard from "./EditorItemCard";

const EditorItemsList = ({ modifyModal }) => {
	const items = {
		items: useSelector(getAllItems),
		status: useSelector(getItemsState),
		error: useSelector(getItemsError),
	};

	let content;
	if (items.status === "loading") {
		content = <h3>Loading...</h3>;
	} else if (items.status === "failed") {
		content = <h3>{items.erorr}</h3>;
	} else if (items.status === "succeeded") {
		content = items.items.map((item) => (
			<EditorItemCard key={item._id} item={item} modifyModal={modifyModal} />
		));
	} else {
		content = <h3>Unknown status: {items.status}</h3>;
	}

	return <StyledEditorItemList>{content}</StyledEditorItemList>;
};

export default EditorItemsList;
