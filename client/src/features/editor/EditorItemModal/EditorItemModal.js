import { forwardRef } from "react";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import { getSelectedItem } from "../../../app/item.slice";
import {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalSection,
	StyledModal,
} from "../../ui/Modal/Modal.styled";
import Input from "../../../features/ui/Input/Input";
import { useState } from "react";
import Textbox from "../../ui/Textbox/Textbox";
import Dropdown from "../../ui/Dropdown/Dropdown";
import EditorOption from "../EditorOption/EditorOption";

const EditorItemModal = forwardRef((props, ref) => {
	const item = useSelector(getSelectedItem);

	const [itemName, setItemName] = useState(item?.name || "");
	const [itemCategory, setItemCategory] = useState(item?.category || "");
	const [itemPrice, setItemPrice] = useState(item?.price || "");
	const [itemDescription, setItemDescription] = useState(
		item?.description || ""
	);

	const onItemNameChange = (e) => setItemName(e.target.value);
	const onItemPriceChange = (e) => {
		if (Number(e.target.value)) {
			setItemPrice(Number(parseFloat(e.target.value).toFixed(2)));
		} else {
			setItemPrice("");
		}
	};

	const options = item?.options.map((option) => (
		<EditorOption key={option._id} option={option} />
	));

	return (
		<StyledModal ref={ref}>
			<ModalHeader>
				<h2>{item === undefined ? "Create " : "Update "} modal</h2>
				<FiX onClick={() => props?.modifyModal(false)} />
			</ModalHeader>
			<ModalBody>
				<ModalSection direction="column">
					<h4>Basic Information:</h4>
					<Input
						type="text"
						label="Item Name:"
						width="100%"
						value={itemName}
						setValue={onItemNameChange}
					/>
					<Input
						type="number"
						label="Item Price:"
						width="100%"
						value={itemPrice}
						setValue={onItemPriceChange}
					/>
					<Dropdown
						width="100%"
						placeholder="Item Category:"
						value={itemCategory}
						setValue={setItemCategory}
						options={[
							{ id: 1, name: "apple" },
							{ id: 2, name: "banana" },
							{ id: 3, name: "orange" },
						]}
					/>
					<Textbox
						width="100%"
						placeholder="Item Description"
						value={itemDescription}
						setValue={setItemDescription}
						maxChars={200}
					/>
				</ModalSection>
				<ModalSection direction="column">
					<h4>Options:</h4>
					{options}
				</ModalSection>
				<ModalSection direction="columnn">
					<h4>Special Instructions:</h4>
				</ModalSection>
			</ModalBody>
			<ModalFooter>
				<button>edit</button>
				<button>delete</button>
			</ModalFooter>
		</StyledModal>
	);
});

export default EditorItemModal;
