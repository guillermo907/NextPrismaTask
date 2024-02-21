export type Note = {
  id: number;
  title: string;
  content: string | null;
  completed?: boolean;
  authorId: number;
};
