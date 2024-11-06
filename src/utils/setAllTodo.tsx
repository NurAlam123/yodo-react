import Todo from "../components/Todo/Todo";
import axiosFetch from "./axiosFetch";

const setAllTodo = async (deleteTodo: (inputID: string) => void) => {
  const res = await axiosFetch("/api/todo", { method: "GET" });
  const data: Todo[] = res.data;
  const allTodo: TodoBoxType[] = [];
  data.map((todo) => {
    const element = (
      <Todo
        key={todo.id}
        inputID={todo.id}
        todoData={todo}
        readonly
        deleteTodo={deleteTodo}
        checked={todo.done}
      />
    );
    const newTodo = {
      id: todo.id,
      element,
    };
    allTodo.push(newTodo);
  });
  return allTodo;
};

export default setAllTodo;
