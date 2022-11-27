const Item = require("./item.model");
const itemValidation = require("./item.validate");

// get all items
const getItems = async (req, res) => {
	const items = await Item.find();
	return res.status(200).json(items);
};

// create new item
const createItem = async (req, res) => {
	// validate the data
	const { error } = itemValidation(req.body);
	if (error) {
		return res.status(400).json({ message: error.details[0].message });
	}

	// create a new item with req data
	const item = new Item(req.body);

	// try to save item
	try {
		const savedItem = await item.save();
		return res.status(200).json(savedItem);
	} catch (err) {
		return res.status(400).json({ message: err });
	}
};

// update item
const updateItem = async (req, res) => {
	// get item by id
	const item = await Item.findById(req.params.id);
	if (!item) {
		return res.status(400).json({ message: "Item not found." });
	}

	// update the item
	const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	// return updated item
	return res.status(200).json(updatedItem);
};

// delete item
const deleteItem = async (req, res) => {
	//get item by id
	const item = await Item.findById(req.params.id);
	if (!item) {
		return res.status(400).json({ message: "Item not found." });
	}

	// try to remove item
	await item.remove();

	// return id of deleted item
	return res.status(200).json({ id: req.params.id });
};

module.exports = { getItems, createItem, updateItem, deleteItem };
