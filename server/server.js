import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from './Routes/PostRoute.js';

// Routes
const app = express();

// Middleware
app.use(bodyParser.json({ limit: "100000", extended: true }));
app.use(bodyParser.urlencoded({ limit: "100000", extended: true }));

dotenv.config();
mongoose.set("strictQuery", true);
mongoose
	.connect(process.env.MONGO_DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(process.env.PORT, () =>
			console.log(`Listening at ${process.env.PORT}`)
		)
	)
	.catch((error) => console.log(error));

// Usage of routes
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
