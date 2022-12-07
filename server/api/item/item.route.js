const router = require("express").Router();
const {
	getItems,
	createItem,
	updateItem,
	deleteItem,
} = require("./item.controller");
const verifyJwt = require("../../middleware/verifyJwt");

/*
@desc   Get all items
@route  GET /items
@access Public
*/
router.get("/", verifyJwt, getItems);

/*
@desc   Create new item
@route  POST /items
@access Protected --> [admin, manager]
*/
router.post("/", verifyJwt, createItem);

/*
@desc   Update item by id
@route  PUT /items
@access Protected --> [admin, manager]
*/
router.put("/:id", verifyJwt, updateItem);

/*
@desc   Delete item by id
@route  DELETE /items
@access Protected --> [admin, manager]
*/
router.delete("/:id", verifyJwt, deleteItem);

module.exports = router;
