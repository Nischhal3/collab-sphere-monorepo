import { Request, Response } from "express";
import { createUser, getAllUsers } from "./model";

export const getAllUsersHandler = async (_: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    if (users.length === 0) {
      return res.status(200).json({ message: "No users found", users: [] });
    }
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Name, email & password are required!" });
    }

    const newUser = await createUser({ name, email, password });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
