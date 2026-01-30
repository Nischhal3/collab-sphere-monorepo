import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./users/routes";
import { API_VERSION_1 } from "./constants";
import express, { Request, Response } from "express";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use(`/api/${API_VERSION_1}/users`, userRoutes);

app.get("/", (_: Request, res: Response) => {
  res.send("Welcome to collab sphere");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
});
