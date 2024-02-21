import { Note } from "./Note";

export type User = {
  id: number;
  email: string;
  name: string;
  image?: string;
  password?: string;
  posts?: Note[];
};
