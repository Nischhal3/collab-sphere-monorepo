import { api } from "../utils/api";

export type User = {
  id: number;
  name: string;
  email: string;
  created_at: string;
};

export type UserInput = {
  name: string;
  email: string;
  password: string;
};

export const getAllUsers = async (): Promise<User[]> => {
  const res = await api.get<User[]>("/users");
  return res.data;
};

export const createUser = async (user: UserInput): Promise<User> => {
  const res = await api.post<User>("/users", user);
  return res.data;
};
