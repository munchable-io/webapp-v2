const User = require("../user/user.model");
const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
	// validate credentials
	const { phoneNumber, password } = req.body;
	if (!phoneNumber || !password) {
		return res
			.status(400)
			.json({ message: "Phone number and password are both required." });
	}

	try {
		// find user by phone number
		const user = await User.findOne({ phoneNumber }).exec();
		if (!user) {
			return res.status(400).json({ message: "User not found." });
		}

		// compare passwords
		const match = await bcrypt.compare(password, user.password);
		if (match) {
			// TODO: create JWT
			res.status(200).json({ message: `${user.firstName} is logged in.` });
		} else {
			res.status(400).json({ message: "Incorrect password." });
		}
	} catch (err) {
		return res.status(400).json({ message: err });
	}
};

module.exports = { handleLogin };
