import userRoutes from "./users/routes";
import { API_VERSION_1 } from "./constants";
import express, { Request, Response } from "express";

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(`/api/${API_VERSION_1}/users`, userRoutes);

app.get("/", (_: Request, res: Response) => {
  res.send("Welcome to collab sphere");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
