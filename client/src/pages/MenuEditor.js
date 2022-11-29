import { useDispatch } from "react-redux";
import { resetSelectedItem } from "../app/item.slice";
import { StyledMenuEditor } from "../features/editor/Editor.styled";
import EditorItemModal from "../features/editor/EditorItemModal/EditorItemModal";
import EditorItemsList from "../features/editor/EditorItemsList";
import Button from "../features/ui/Button/Button";
import useComponentVisible from "../features/ui/hooks/useComponentVisible";

const MenuEditor = () => {
	const dispatch = useDispatch();
	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(false);

	return (
		<>
			{isComponentVisible && (
				<EditorItemModal
					ref={ref}
					modifyModal={(state) => setIsComponentVisible(state)}
				/>
			)}
			<div className="container">
				<StyledMenuEditor>
					<div className="row">
						<h2>Menu Editor</h2>
						<Button
							value="Add New Item"
							onClick={() => {
								dispatch(resetSelectedItem());
								setIsComponentVisible(true);
							}}
						/>
					</div>
					<EditorItemsList
						modifyModal={(state) => setIsComponentVisible(state)}
					/>
				</StyledMenuEditor>
			</div>
		</>
	);
};

export default MenuEditor;
