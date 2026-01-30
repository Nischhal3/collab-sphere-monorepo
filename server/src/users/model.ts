import { dbPool } from "../dbPool";

export interface User {
  name: string;
  email: string;
  password: string;
}

export const getAllUsers = async () => {
  const result = await dbPool.query(
    "SELECT id, name, email, created_at FROM users;",
  );

  return result.rows;
};

export const createUser = async (user: User) => {
  const result = await dbPool.query(
    `
    INSERT INTO users (name, email, password_hash)
    VALUES ($1, $2, $3)
    RETURNING id, name, email, created_at
    `,
    [user.name, user.email, user.password],
  );

  return result.rows[0];
};
