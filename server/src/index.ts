import express, { Request, Response } from "express";

const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get("/", (_: Request, res: Response) => {
  res.send("Hi from Node server on port 3001!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
