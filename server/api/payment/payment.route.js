require("dotenv").config();
const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_TEST_SK);

router.get("/", async (req, res) => {
	res.status(200).json({ message: "test" });
});

module.exports = router;
