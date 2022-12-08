const User = require("./user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
			// create JWTs
			const accessToken = jwt.sign(
				{ user: { phoneNumber: user.phoneNumber, role: user.role } },
				process.env.ACCESS_TOKEN_SECRET,
				{ expiresIn: "15m" }
			);
			const refreshToken = jwt.sign(
				{ phoneNumber: user.phoneNumber, role: user.role },
				process.env.REFRESH_TOKEN_SECRET,
				{ expiresIn: "1d" }
			);

			// saving refreshToken for current user
			const updatedUser = await User.findOneAndUpdate(
				user._id,
				{ refreshToken: refreshToken },
				{ new: true }
			);

			// send refreshToken as httpOnly cookie (max age of 1 day)
			// secure: true --> in production for https
			res.cookie("jwt", refreshToken, {
				httpOnly: true,
				maxAge: 24 * 60 * 60 * 1000,
			});

			// send accessToken as json
			res.status(200).json({
				firstName: updatedUser.firstName,
				lastName: updatedUser.lastName,
				role: updatedUser.role,
				accessToken: accessToken,
			});
		} else {
			res.status(400).json({ message: "Incorrect password." });
		}
	} catch (err) {
		return res.status(400).json({ message: err });
	}
};

const getAccessToken = async (req, res) => {
	// get/verify cookies from request
	const cookies = req.cookies;
	if (!cookies?.jwt) {
		return res.status(401).json({ message: "JWT cookie not found." });
	}

	// get refresh token from cookie
	const refreshToken = cookies.jwt;

	try {
		// find user via refresh token
		const user = await User.findOne({ refreshToken }).exec();
		if (!user) {
			return res.status(400).json({ message: "User not found." });
		}

		// verify refresh token from cookie and create new access token
		jwt.verify(
			refreshToken,
			process.env.REFRESH_TOKEN_SECRET,
			(err, decodedData) => {
				// forbidden if error or # doesn't match (we sent phone # in token)
				if (err || user.phoneNumber !== decodedData.phoneNumber) {
					return res.status(403).json({ message: "Forbidden." });
				}

				// create new access token
				const accessToken = jwt.sign(
					{ user: { phoneNumber: user.phoneNumber, role: user.role } },
					process.env.ACCESS_TOKEN_SECRET,
					{ expiresIn: "30s" }
				);

				// send accessToken as json
				res.status(200).json({ accessToken: accessToken });
			}
		);
	} catch (err) {
		return res.status(400).json({ message: err });
	}
};

const handleLogout = async (req, res) => {
	// on client side --> delete accessToken
	// get/verify cookies from request
	const cookies = req.cookies;
	if (!cookies?.jwt) {
		return res.status(204).json({ message: "No content." });
	}

	// get refresh token from cookie
	const refreshToken = cookies.jwt;

	try {
		// find user via refresh token
		const user = await User.findOne({ refreshToken }).exec();
		if (!user) {
			res.clearCookie("jwt", refreshToken, {
				httpOnly: true,
				maxAge: 24 * 60 * 60 * 1000,
			});
			return res.status(204).json({ message: "No content." });
		}

		// clear refresh token for user in db
		const updatedUser = await User.findOneAndUpdate(
			user._id,
			{ refreshToken: "" },
			{ new: true }
		);

		// delete cookie
		res.clearCookie("jwt", refreshToken, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000,
		});

		return res.status(204).json({ message: "No content." });
	} catch (err) {
		return res.status(400).json({ message: err });
	}
};

module.exports = { handleLogin, getAccessToken, handleLogout };
