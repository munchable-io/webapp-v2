const router = require("express").Router();
const {
	getUsers,
	createUser,
	updateUser,
	deleteUser,
	sendOtp,
} = require("./user.controller");
const { handleLogin } = require("./auth.controller");

/*
@desc   Get all users
@route  GET /users
@access Private
*/
router.get("/", getUsers);

/*
@desc   Get user by phone number
@route  GET /users/send/:number
@access Private
*/
router.get("/send/:number", sendOtp);

/*
@desc   Create new user
@route  POST /users
@access Public
*/
router.post("/", createUser);

/*
@desc   Authenticate user by phone number
@route  POST /auth
@access Private
*/
router.post("/auth", handleLogin);

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
