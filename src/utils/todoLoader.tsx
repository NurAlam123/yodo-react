import Todo from "../components/Todo/Todo";
import axiosFetch from "./axiosFetch";

const todoLoader = async () => {
  const res = await axiosFetch("/api/todo", { method: "GET" });
  const data = res.data;
  const allTodo: React.ReactNode[] = [];
  data.map((todo: Todo) => {
    const element = (
      <Todo inputID={todo._id} key={todo._id} todoData={todo} readonly />
    );
    allTodo.push(element);
  });
  return allTodo;
};

export default todoLoader;
