const Restaurant = require("./restaurant.model");
const restaurantValidation = require("./restaurant.validate");

const getRestaurants = async (req, res) => {
	try {
		const restaurants = await Restaurant.find();
		return res.status(200).json(restaurants);
	} catch (err) {
		return req.status(400).json({ message: err.message });
	}
};

const createRestaurant = async (req, res) => {
	// validate body data
	const { error } = restaurantValidation(req.body);
	if (error) {
		return res.status(400).json({ message: error.details[0].message });
	}

	// create new restaurant
	const restaurant = new Restaurant(req.body);

	// try to save
	try {
		const savedRestaurant = await restaurant.save();
		return res.status(200).json(savedRestaurant);
	} catch (err) {
		return res.status(400).json({ message: err.message });
	}
};

const deleteRestaurant = async (req, res) => {
	// try to get restaurant by id
	try {
		const restaurant = await Restaurant.findById(req.params.id);
		if (!restaurant) {
			return res.status(400).json({ message: "Restaurant not found." });
		}

		// try to remove
		await restaurant.remove();

		// return id
		return res.status(200).json({ id: req.params.id });
	} catch (err) {
		return res.status(400).json({ message: err.message });
	}
};

module.exports = {
	getRestaurants,
	createRestaurant,
	deleteRestaurant,
};
