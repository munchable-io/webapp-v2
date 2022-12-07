require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const cookieParser = require("cookie-parser");

// declare variables
const PORT = process.env.PORT || 5000;
const app = express();

// connect to database
connectDB();

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/users", require("./api/user/user.route"));
app.use("/items", require("./api/item/item.route"));

// connect to server
app.listen(PORT, (err) => {
	if (!err) {
		console.log(`Server running on port ${PORT}`);
	} else {
		console.log("Error occured: ", err);
	}
});
