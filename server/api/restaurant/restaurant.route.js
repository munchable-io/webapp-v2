const router = require("express").Router();
const {
	getRestaurants,
	createRestaurant,
	deleteRestaurant,
} = require("./restaurant.controller");

/*
@desc   Get all restaurants
@route  GET /restaurants
@access Private
*/
router.get("/", getRestaurants);

/*
@desc   Create new restaurant
@route  POST /restaurants
@access Public
*/
router.post("/", createRestaurant);

/*
@desc   Delete restaurant
@route  DELETE /restaurants/:id
@access Private
*/
router.delete("/:id", deleteRestaurant);

module.exports = router;
