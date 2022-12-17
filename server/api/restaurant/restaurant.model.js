const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		admin: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
