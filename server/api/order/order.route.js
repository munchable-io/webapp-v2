const router = require("express").Router();
const {
	getOrders,
	getOrder,
	getOrderByUser,
	createOrder,
	updateOrder,
	deleteOrder,
} = require("./order.controller");

/*
@desc   Get all orders
@route  GET /orders
@access Protected --> [admin, manager]
*/
router.get("/", getOrders);

/*
@desc   Get order by id
@route  GET /orders/:id
@access Protected --> [admin, manager]
*/
router.get("/:id", getOrder);

/*
@desc   Get order by userid
@route  GET /orders/user/:id
@access Protected --> [admin, manager]
*/
router.get("/user/:id", getOrderByUser);

/*
@desc   Create new order
@route  POST /orders
@access Protected --> [admin, manager]
*/
router.post("/", createOrder);

/*
@desc   Update order by id
@route  PUT /orders
@access Protected --> [admin, manager]
*/
router.put("/:id", updateOrder);

/*
@desc   Delete order by id
@route  DELETE /orders
@access Protected --> [admin, manager]
*/
router.delete("/:id", deleteOrder);

module.exports = router;
