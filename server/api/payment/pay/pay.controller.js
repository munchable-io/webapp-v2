require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_TEST_SK);

// create payment link
/*
    line_items: [{
        price_data: {
            currency: "usd",
            product_data: {
                name: "product name"
            },
            unit_amount: 123, <-- price in cents
        },
        quantity: 1,
        tax_rates: [tax_rates_ids]
    }]
*/
const createPaymentLink = async (req, res) => {
	const { cancelUrl, successUrl, lineItems } = req.body;
	if (!cancelUrl || !successUrl || !lineItems) {
		return res.status(500).json({
			message: "Please include cancelUrl, successUrl, and lineItems.",
		});
	}

	try {
		const session = await stripe.checkout.sessions.create({
			cancel_url: cancelUrl,
			success_url: successUrl,
			mode: "payment",
			payment_method_types: ["card"],
			tax_id_collection: {
				enabled: true,
			},
			line_items: lineItems,
		});

		res.status(200).json({ url: session.url });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = { createPaymentLink };
