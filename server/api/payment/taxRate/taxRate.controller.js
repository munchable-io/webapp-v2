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

// get tax rate by id
const getTaxRate = async (req, res) => {
	try {
		const taxRate = await stripe.taxRates.retrieve(req.params.id);
		return res.status(200).json(taxRate);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

// create new tax rate
const createTaxRate = async (req, res) => {
	const { jurisdiction, percentage } = req.body;
	if (!jurisdiction || !percentage) {
		return res
			.status(400)
			.json({ message: "Please include jurisdiction and percentage." });
	}

	try {
		const taxRate = await stripe.taxRates.create({
			display_name: "Sales Tax",
			description: "Sales Tax",
			jurisdiction: jurisdiction,
			percentage: percentage,
			inclusive: false,
			tax_type: "sales_tax",
		});
		return res.status(200).json(taxRate);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

// update tax rate
const updateTaxRate = async (req, res) => {
	try {
		const taxRate = await stripe.taxRates.update(req.params.id, req.body);
		return res.status(200).json(taxRate);
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
};

module.exports = {
	getTaxRates,
	getTaxRate,
	createTaxRate,
	updateTaxRate,
};
