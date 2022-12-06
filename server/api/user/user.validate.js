const Joi = require("@hapi/joi");

const userValidation = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required(),
		lastName: Joi.string().required(),
		phoneNumber: Joi.string().required(),
		email: Joi.string().required(),
		password: Joi.string(),
		role: Joi.string().required(),
	});

	return schema.validate(data);
};

module.exports = userValidation;
