const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		category: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		options: [
			{
				name: {
					type: String,
					required: true,
				},
				required: {
					type: Boolean,
					required: true,
				},
				description: {
					type: String,
					required: true,
				},
				selectionType: {
					type: String,
					required: true,
				},
				maxQty: {
					type: Number,
					required: true,
				},
				choices: [
					{
						name: {
							type: String,
							required: true,
						},
						cost: {
							type: Number,
							required: true,
						},
					},
				],
			},
		],
		note: {
			placeholder: {
				type: String,
				required: true,
			},
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Item", itemSchema);
