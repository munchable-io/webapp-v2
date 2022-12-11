import { FiX } from "react-icons/fi";
import { forwardRef, useState } from "react";
import {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalSection,
	StyledModal,
} from "../../ui/Modal/Modal.styled";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedItem } from "../item.slice";
import SingleOption from "../Options/SingleOption";
import MultiOption from "../Options/MultiOption";
import Textbox from "../../ui/Textbox/Textbox";
import Button from "../../ui/Button/Button";
import Counter from "../../ui/Counter/Counter";
import { addItemToOrder } from "../../users/users.slice";
import { addToast } from "../../ui/Toast/Toast.slice";

const ItemModal = forwardRef((props, ref) => {
	const dispatch = useDispatch();
	const item = useSelector(getSelectedItem);

	const [userMessage, setUserMessage] = useState("");
	const [qty, setQty] = useState(1);
	const [options, setOptions] = useState(
		item?.options.map((option) => {
			return {
				_id: option?._id,
				name: option?.name,
				description: option?.description,
				selectionType: option?.selectionType,
				required: option?.required,
				maxQty: option?.maxQty,
				choices: option?.choices.map((choice) => {
					return {
						_id: choice?._id,
						name: choice?.name,
						cost: choice?.cost,
						selected: false,
					};
				}),
			};
		})
	);

	const customizedOptions = options.map((option) => {
		let choices = [];
		for (let choice of option.choices) {
			choice.selected && choices.push({ name: choice.name, cost: choice.cost });
		}
		return {
			name: option.name,
			choices,
		};
	});
	let additionalPrice = 0;
	for (let option of customizedOptions) {
		for (let choice of option.choices) {
			if (choice.cost !== 0) additionalPrice += choice.cost;
		}
	}
	const totalPrice = qty * (item?.price + additionalPrice);

	const validateForm = () => {
		let res = [];
		for (let option of options) {
			if (option?.required) {
				let choiceSelected = false;
				for (let choice of option.choices) {
					if (choice.selected) {
						choiceSelected = true;
					}
				}
				if (!choiceSelected) res.push(option?.name);
			}
		}
		return res;
	};

	const handleSubmit = () => {
		const missingRequiredFields = validateForm();
		if (missingRequiredFields.length === 0) {
			const customizedItem = {
				id: item._id,
				name: item.name,
				price: item.price,
				additionalPrice: additionalPrice,
				qty: qty,
				options: customizedOptions,
				message: userMessage || "N/A",
			};
			dispatch(addItemToOrder(customizedItem));

			setUserMessage("");
			setQty(1);
			setOptions([]);

			dispatch(
				addToast({
					status: "success",
					header: "Success!",
					body: `${customizedItem.name} added to cart.`,
				})
			);

			props.modifyModal(false);
		} else {
			dispatch(
				addToast({
					status: "warning",
					header: "Whoops! Looks like you missed some fields:",
					body: missingRequiredFields.map(
						(field, index) =>
							field + (index < missingRequiredFields.length - 1 ? ", " : "")
					),
				})
			);
		}
	};

	const itemOptions = options.map((option) =>
		option.selectionType === "single" ? (
			<SingleOption
				key={option._id}
				option={option}
				options={options}
				setOptions={setOptions}
			/>
		) : (
			<MultiOption
				key={option._id}
				option={option}
				options={options}
				setOptions={setOptions}
			/>
		)
	);

	return (
		<StyledModal ref={ref}>
			<ModalHeader>
				<h2>{item?.name}</h2>
				<FiX onClick={() => props.modifyModal(false)} />
			</ModalHeader>
			<ModalBody>
				<ModalSection direction="column">
					<h4>Description:</h4>
					<p>{item?.description}</p>
				</ModalSection>
				<ModalSection direction="column">
					<h4>Options:</h4>
					{itemOptions}
				</ModalSection>
				<ModalSection direction="column">
					<h4>Special Instructions:</h4>
					<Textbox
						placeholder={item?.note?.placeholder}
						value={userMessage}
						setValue={setUserMessage}
						maxChars={200}
					/>
				</ModalSection>
			</ModalBody>
			<ModalFooter>
				<Counter
					value={qty}
					increment={() => setQty(qty + 1)}
					decrement={() => {
						if (qty > 1) {
							setQty(qty - 1);
						}
					}}
				/>
				<Button
					value={`Add To Cart | $${totalPrice.toFixed(2)}`}
					color={"#0984e3"}
					onClick={handleSubmit}
				/>
			</ModalFooter>
		</StyledModal>
	);
});

export default ItemModal;
