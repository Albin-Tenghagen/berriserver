import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({ message: "Welcome to the BerriServer!" });
});

// Only start server in non-test mode
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
  });
}

export default app; // <-- MUST export the app (NOT the server)
