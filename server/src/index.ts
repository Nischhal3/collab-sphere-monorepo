import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./users/routes";
import { API_VERSION_1 } from "./constants";
import express, { Request, Response } from "express";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(express.json());

const allowedOrigin =
  process.env.NODE_ENV === "development"
    ? process.env.CLIENT_DEV_URL
    : process.env.CLIENT_PROD_URL;

app.use(
  cors({
    credentials: true,
    origin: allowedOrigin,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use(`/api/${API_VERSION_1}/users`, userRoutes);

app.get("/", (_: Request, res: Response) => {
  res.send("Welcome to collab sphere");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
