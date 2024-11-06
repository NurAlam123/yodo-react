// @types todo

interface Todo {
  id: string;
  email: string;
  content: string;
  createdAt: number;
  done: boolean;
}

type TodoBoxType = {
  id: string;
  element: React.ReactNode;
};
