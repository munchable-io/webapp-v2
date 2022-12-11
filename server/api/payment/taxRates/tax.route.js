require("dotenv").config();
const router = require("express").Router();
const { getTaxRates } = require("./tax.controller");

/*
@desc   Get all tax rates
@route  GET /taxRates
@access Private
*/
router.get("/", getTaxRates);

module.exports = router;
