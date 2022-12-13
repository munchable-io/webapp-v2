require("dotenv").config();
const router = require("express").Router();

// pay endpoint
router.use("/pay", require("./pay"));

// tax rates endpoint
router.use("/taxRates", require("./taxRate"));

module.exports = router;
