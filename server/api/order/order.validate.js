const Joi = require("@hapi/joi");

const orderValidation = (data) => {
	const schema = Joi.object({
		restaurant: Joi.string(), //add .required() once restaurant exists
		userId: Joi.string().required(),
		status: Joi.string().required(),
		items: Joi.array().items(
			Joi.object({
				name: Joi.string().required(),
				message: Joi.string().required(),
				price: Joi.number().required(),
				qty: Joi.number().required(),
				options: Joi.array().items(
					Joi.object({
						name: Joi.string().required(),
						choices: Joi.array().items(
							Joi.object({
								name: Joi.string().required(),
								cost: Joi.number().required(),
							})
						),
					})
				),
			})
		),
		subTotalAmount: Joi.number().required(),
		tipAmount: Joi.number().required(),
		taxAmount: Joi.number().required(),
		feeAmount: Joi.number().required(),
		totalAmount: Joi.number().required(),
	});

	return schema.validate(data);
};

module.exports = orderValidation;
