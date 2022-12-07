const router = require("express").Router();
const {
	getUsers,
	createUser,
	updateUser,
	deleteUser,
	sendOtp,
} = require("./user.controller");
const {
	handleLogin,
	getAccessToken,
	handleLogout,
} = require("./auth.controller");

/*
@desc   Get all users
@route  GET /users
@access Private
*/
router.get("/", getUsers);

/*
@desc   Get user by phone number
@route  GET /users/send/:number
@access Public
*/
router.get("/send/:number", sendOtp);

/*
@desc   Get new access token
@route  GET /users/refresh
@access Public
*/
router.get("/refresh", getAccessToken);

/*
@desc   Logout user
@route  GET /users/logout
@access Public
*/
router.get("/logout", handleLogout);

/*
@desc   Create new user
@route  POST /users
@access Public
*/
router.post("/", createUser);

/*
@desc   Authenticate user by phone number
@route  POST /auth
@access Public
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
