const router = require("express").Router();
const { getUsers } = require("./user.controller");

/*
@desc   Get all users
@route  GET /users
@access Private
*/
router.get("/", getUsers);

module.exports = router;
