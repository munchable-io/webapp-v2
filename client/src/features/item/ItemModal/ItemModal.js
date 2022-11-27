import { FiX } from "react-icons/fi";
import { forwardRef, useState } from "react";
import {
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalSection,
	StyledModal,
} from "../../ui/Modal/Modal.styled";
import { useSelector } from "react-redux";
import { getSelectedItem } from "../item.slice";
import SingleOption from "../Options/SingleOption";
import MultiOption from "../Options/MultiOption";
import Textbox from "../../ui/Textbox/Textbox";
import Button from "../../ui/Button/Button";
import Counter from "../../ui/Counter/Counter";

const ItemModal = forwardRef((props, ref) => {
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
				selectedChoice: undefined,
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

	const formValid = () => {
		for (let option of options) {
			if (option?.required && option?.selectedChoice === undefined) {
				return false;
			}
		}
		return true;
	};

	const handleSubmit = () => {
		if (formValid()) {
			// create order object
			// send to order slice
		} else {
			alert("Please fill out all required fields.");
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
				<Counter value={qty} setValue={setQty} />
				<Button
					value="Add To Cart | $12.34"
					color={"#0984e3"}
					onClick={handleSubmit}
				/>
			</ModalFooter>
		</StyledModal>
	);
});

export default ItemModal;
