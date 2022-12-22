require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_TEST_SK);

// create payment link
/*
    order: {
		name: String,
		price: Number,
		qty: Number,
		taxRates: [String]
	}
*/
const createPaymentLink = async (req, res) => {
    const { cancelUrl, successUrl, order } = req.body;
    if (!cancelUrl || !successUrl || !order) {
        return res.status(500).json({
            message: "Please include cancelUrl, successUrl, and order.",
        });
    }

    const lineItems = order.map((item) => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: item?.name,
            },
            unit_amount: item?.price,
        },
        quantity: item?.qty,
        tax_rates: [...item?.taxRates],
    }));

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
