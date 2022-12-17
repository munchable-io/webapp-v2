const Joi = require("@hapi/joi");

const restaurantValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string().required(),
		admin: Joi.string().required(),
	});

	return schema.validate(data);
};

module.exports = restaurantValidation;
