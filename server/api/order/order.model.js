const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
	{
		restaurant: {
			type: mongoose.Schema.Types.ObjectId,
			required: false, // needs to be set to true once restaurants are created
		},
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		status: {
			type: String,
			required: true,
		},
		items: [
			{
				name: {
					type: String,
					required: true,
				},
				message: {
					type: String,
					required: true,
				},
				price: {
					type: Number,
					required: true,
				},
				qty: {
					type: Number,
					required: true,
				},
				options: [
					{
						name: {
							type: String,
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
			},
		],
		subTotalAmount: {
			type: Number,
			required: true,
		},
		tipAmount: {
			type: Number,
			required: true,
		},
		taxAmount: {
			type: Number,
			required: true,
		},
		feeAmount: {
			type: Number,
			required: true,
		},
		totalAmount: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Order", orderSchema);
