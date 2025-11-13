import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// Create a new express application instance
dotenv.config();
const app = express();
app.use(cors());
// Set the network port
const port = process.env.PORT || 3000;

// Define the root path with a greeting message
app.get("/", (_req, res) => {
	res.json({ message: "Welcome to the BerriServer!" });
});

// Start the Express server
app.listen(port, () => {
	console.log(`The server is running at http://localhost:${port}`);
});
