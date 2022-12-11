require("dotenv").config();
const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_TEST_SK);

router.get("/", async (req, res) => {
	try {
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			line_items: [
				{
					price_data: {
						currency: "usd",
						product_data: {
							name: "Test Product 1",
						},
						unit_amount: 999,
					},
					quantity: 2,
				},
				{
					price_data: {
						currency: "usd",
						product_data: {
							name: "Test Product 2",
						},
						unit_amount: 1299,
					},
					quantity: 1,
				},
			],
			mode: "payment",
			cancel_url: "https://example.com/cancel",
			success_url: "https://example.com/success",
		});

		res.status(200).json(session.url);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// tax endpoints
router.use("/taxRates", require("./taxRates"));

module.exports = router;
