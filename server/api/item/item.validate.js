const Joi = require("@hapi/joi");

const itemValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string().required(),
		category: Joi.string().required(),
		description: Joi.string().required(),
		price: Joi.number().required(),
		options: Joi.array()
			.items(
				Joi.object({
					name: Joi.string().required(),
					required: Joi.boolean().required(),
					description: Joi.string().required(),
					selectionType: Joi.string().required(),
					maxQty: Joi.number().required(),
					choices: Joi.array()
						.items(
							Joi.object({
								name: Joi.string().required(),
								cost: Joi.number().required(),
							}).required()
						)
						.required(),
				})
			)
			.required(),
		note: Joi.object({
			placeholder: Joi.string().required(),
		}),
	});

	return schema.validate(data);
};

module.exports = itemValidation;
