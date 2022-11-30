import { forwardRef } from "react";
import { FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
	addItemOption,
	fetchItems,
	getSelectedItem,
} from "../../../app/item.slice";
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
import Button from "../../ui/Button/Button";
import axios from "axios";
import { store } from "../../../app/store";

const EditorItemModal = forwardRef((props, ref) => {
	const dispatch = useDispatch();
	const item = useSelector(getSelectedItem);

	const [loading, setLoading] = useState(false);

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

	const options = item?.options.map((option) => {
		return <EditorOption key={option._id} item={item} option={option} />;
	});

	const addNewOption = () => {
		dispatch(addItemOption());
	};

	const validateForm = () => {
		let res = [];

		if (!itemName) res.push("Item Name");
		if (!itemPrice) res.push("Item Price");
		if (!itemCategory) res.push("Item Category");
		if (!itemDescription) res.push("Item Description");

		for (let option of item?.options) {
			if (option?.required && option?.choices.length === 0) {
				res.push(option?.name || "Empty option name");
			}
		}

		return res;
	};

	const addItem = async (payload) => {
		try {
			await axios.post("http://localhost:5000/items", payload);

			store.dispatch(fetchItems());
			props?.setIsComponentVisible(false);
		} catch (err) {
			alert("There was an error. Please check logs");
			console.log(err);
		}
	};

	const updateItem = async (payload) => {
		try {
			await axios.put(`http://localhost:5000/items/${item?._id}`, payload);

			store.dispatch(fetchItems());
			props?.setIsComponentVisible(false);
		} catch (err) {
			alert("There was an error. Please check logs");
			console.log(err);
		}
	};

	const deleteItem = async (payload) => {
		try {
			await axios.delete(`http://localhost:5000/items/${item?._id}`, payload);

			store.dispatch(fetchItems());
			props?.setIsComponentVisible(false);
		} catch (err) {
			alert("There was an error. Please check logs");
			console.log(err);
		}
	};

	const createUpdateItem = () => {
		const missingRequiredFields = validateForm();
		if (missingRequiredFields.length === 0) {
			setLoading(true);
			const itemToAdd = {
				name: itemName,
				description: itemDescription,
				category: itemCategory,
				price: itemPrice,
				note: {
					placeholder: "No substitutes; additions are subject to extra charge",
				},
				options: item?.options.map((option) => {
					return {
						name: option.name,
						required: option.required,
						selectionType: option.selectionType,
						description:
							option.selectionType === "single"
								? "Please select one"
								: "Select all that apply",
						choices: option.choices.map((choice) => {
							return {
								name: choice.name,
								cost: choice.cost,
							};
						}),
						maxQty:
							option.selectionType === "single" ? 1 : option.choices.length,
					};
				}),
			};

			if (item?.createdAt) {
				updateItem(itemToAdd);
			} else {
				addItem(itemToAdd);
			}
		} else {
			// TODO add toast notifications
			alert(
				"Please select choices for the following options: \n" +
					missingRequiredFields.map((field) => field)
			);
		}
	};

	return (
		<StyledModal ref={ref}>
			<ModalHeader>
				<h2>{item?.createdAt ? "Update " : "Create "} Menu Item</h2>
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
					<div className="row">
						<h4>Options:</h4>
						<Button
							value="Add New Option"
							fontSize="0.6rem"
							onClick={addNewOption}
						/>
					</div>
					{options}
				</ModalSection>
			</ModalBody>
			<ModalFooter>
				<Button
					value="Delete"
					onClick={() => {
						deleteItem();
					}}
				/>
				<Button
					value={item?.createdAt ? "Update Item" : "Create New Item"}
					loading={loading}
					onClick={createUpdateItem}
				/>
			</ModalFooter>
		</StyledModal>
	);
});

export default EditorItemModal;
