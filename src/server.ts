import express from "express";

// Create a new express application instance
const app = express();

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
