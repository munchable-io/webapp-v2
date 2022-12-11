const stripe = require("stripe")(process.env.STRIPE_TEST_SK);

// get all tax rates
const getTaxRates = async (req, res) => {
	try {
		const taxRates = await stripe.taxRates.list();
		return res.status(200).json(taxRates);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

module.exports = {
	getTaxRates,
};
