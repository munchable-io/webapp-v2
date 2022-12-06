const router = require("express").Router();
const {
	getUsers,
	createUser,
	updateUser,
	deleteUser,
	getUserByNumber,
} = require("./user.controller");

/*
@desc   Get all users
@route  GET /users
@access Private
*/
router.get("/", getUsers);

/*
@desc   Get user by phone number
@route  GET /users/:number
@access Private
*/
router.get("/:number", getUserByNumber);

/*
@desc   Create new user
@route  POST /users
@access Public
*/
router.post("/", createUser);

/*
@desc   Update user by id
@route  PUT /users/:id
@access Private
*/
router.put("/:id", updateUser);

/*
@desc   Delete user by id
@route  DELETE /users/:id
@access Private
*/
router.delete("/:id", deleteUser);

module.exports = router;
