const Order = require("./order.model");
const orderValidation = require("./order.validate");

// get all orders
const getOrders = async (req, res) => {
	const limit = req.params.limit || 100;
	try {
		const orders = await Order.find().limit(limit);
		return res.status(200).json(orders);
	} catch (err) {
		return res.status(400).json({ message: err });
	}
};

// get order by id
const getOrder = async (req, res) => {
	try {
		const order = await Order.findById(req.params.id);
		if (!order) {
			return res.status(400).json({ message: "Order not found." });
		}

		return res.status(200).json(order);
	} catch (err) {
		return res.status(400).json({ message: err });
	}
};

// get orders by restaurant id
const getOrderByRestaurant = async (req, res) => {};

// get order by user id
const getOrderByUser = async (req, res) => {
	try {
		const order = await Order.findOne({ userId: req.params.id });
		if (!order) {
			return res.status(400).json({ message: "User not found." });
		}

		return res.status(200).json(order);
	} catch (err) {
		return res.status(400).json({ message: err });
	}
};

// create new item
const createOrder = async (req, res) => {
	const { error } = orderValidation(req.body);
	if (error) {
		return res.status(400).json({ message: error.details[0].message });
	}

	const order = new Order(req.body);

	try {
		const savedOrder = await order.save();
		return res.status(200).json(savedOrder);
	} catch (err) {
		return res.status(400).json({ message: err });
	}
};

// update order
const updateOrder = async (req, res) => {
	const order = await Order.findById(req.params.id);
	if (!order) {
		return res.status(400).json({ message: "Order not found." });
	}

	try {
		const updatedOrder = await Order.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
			}
		);

		return res.status(200).json(updatedOrder);
	} catch (err) {
		return res.status(400).json({ message: err });
	}
};

// delete order
const deleteOrder = async (req, res) => {
	const order = await Order.findById(req.params.id);
	if (!order) {
		return res.status(400).json({ message: err });
	}

	try {
		await order.remove();
		return res.status(200).json({ id: req.params.id });
	} catch (err) {
		return res.status(400).json({ message: err });
	}
};

module.exports = {
	getOrders,
	getOrder,
	getOrderByRestaurant,
	getOrderByUser,
	createOrder,
	updateOrder,
	deleteOrder,
};
