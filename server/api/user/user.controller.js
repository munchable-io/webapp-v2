const User = require("./user.model");
const userValidation = require("./user.validate");
const bcrypt = require("bcrypt");
require("dotenv").config();

//twilio stuff
const twilioClient = require("twilio")(
	process.env.TWILIO_SID,
	process.env.TWILIO_TOKEN
);

const getUsers = async (req, res) => {
	const users = await User.find();
	return res.status(200).json(users);
};

const sendOtp = async (req, res) => {
	try {
		// find user by phone number
		const user = await User.findOne({ phoneNumber: req.params.number }).exec();
		if (!user) {
			return res.status(401).json({ message: "User not found." });
		}

		// generate a otp
		let otp = "";
		for (let i = 0; i < 6; i++) {
			otp += Math.floor(Math.random(1) * 10).toString();
		}

		// create a pwd for user
		const hashedPwd = await bcrypt.hash(otp, 10);

		// update user with new password
		const updatedUser = await User.findOneAndUpdate(
			user._id,
			{ password: hashedPwd },
			{ new: true }
		);

		// send password to user's phone number
		const message = await twilioClient.messages.create({
			body: `Your Munchable security code is ${otp}`,
			from: "+14302555327",
			to: req.params.number,
		});

		return res
			.status(200)
			.json({
				firstName: updatedUser.firstName,
				lastName: updatedUser.lastName,
			});
	} catch (err) {
		return res.status(400).json({ message: err });
	}
};

const createUser = async (req, res) => {
	// validate the data
	const { error } = userValidation(req.body);
	if (error) {
		return res.status(400).json({ message: error.details[0].message });
	}

	// create a new user with req data
	const user = new User(req.body);

	// try to save user
	try {
		const savedUser = await user.save();
		return res.status(200).json(savedUser);
	} catch (err) {
		return res.status(400).json({ message: err });
	}
};

const updateUser = async (req, res) => {
	// get user by id
	const user = await User.findById(req.params.id);
	if (!user) {
		return res.status(400).json({ message: "User not found." });
	}

	// update the user
	const updatedUser = await User.findOneAndUpdate(req.params.id, req.body, {
		new: true,
	});

	// return updated user
	return res.status(200).json(updatedUser);
};

const deleteUser = async (req, res) => {
	// get user by id
	const user = await User.findById(req.params.id);
	if (!user) {
		return res.status(400).json({ message: "User not found." });
	}

	// try to remove user
	await user.remove();

	// return id of deleted user
	return res.status(200).json({ id: req.params.id });
};

module.exports = {
	getUsers,
	sendOtp,
	createUser,
	updateUser,
	deleteUser,
};
