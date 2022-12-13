require("dotenv").config();
const router = require("express").Router();
const {
	getTaxRates,
	createTaxRate,
	getTaxRate,
	updateTaxRate,
} = require("./taxRate.controller.js");

/*
@desc   Get all tax rates
@route  GET /taxRates
@access Private
*/
router.get("/", getTaxRates);

/*
@desc   Create new tax rate
@route  POST /taxRates
@access Private
*/
router.post("/", createTaxRate);

/*
@desc   Get tax rate by id
@route  GET /taxRates/:id
@access Private
*/
router.get("/:id", getTaxRate);

/*
@desc   Update tax rate
@route  PUT /taxRates/:id
@access Private
*/
router.put("/:id", updateTaxRate);

module.exports = router;
