const router = require("express").Router();
const {
	getItems,
	createItem,
	updateItem,
	deleteItem,
} = require("./item.controller");

/*
@desc   Get all items
@route  GET /items
@access Private
*/
router.get("/", getItems);

/*
@desc   Create new item
@route  POST /items
@access Private
*/
router.post("/", createItem);

/*
@desc   Update item by id
@route  PUT /items
@access Private
*/
router.put("/:id", updateItem);

/*
@desc   Delete item by id
@route  DELETE /items
@access Private
*/
router.delete("/:id", deleteItem);

module.exports = router;
