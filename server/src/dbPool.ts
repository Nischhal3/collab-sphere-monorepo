import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const dbPool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

(async () => {
  try {
    const client = await dbPool.connect();
    console.log("Connected to Postgres.");
    client.release();
  } catch (err) {
    console.error("Postgres connection error:", err);
  }
})();
