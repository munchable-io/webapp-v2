const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJwt = (req, res, next) => {
	// get authorization header
	const authHeader = req.headers.authorization || req.headers.Authorization;
	if (!authHeader?.startsWith("Bearer ")) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	// get token from authHeader
	const token = authHeader.split(" ")[1];

	// verify the token
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedData) => {
		if (err) {
			return res.status(403).json({ message: "Invalid token" });
		}

		// send decoded data; see accessToken and refreshToken init in handleLogin()
		req.phoneNumber = decodedData.user.phoneNumber;
		req.role = decodedData.user.role;

		next();
	});
};

module.exports = verifyJwt;
