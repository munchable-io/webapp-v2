require("dotenv").config();
const router = require("express").Router();
const { createPaymentLink } = require("./pay.controller");

/*
@desc   Create payment link
@route  POST /payment/pay
@access Private 
*/
router.post("/", createPaymentLink);

module.exports = router;
