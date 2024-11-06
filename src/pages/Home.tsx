import { useEffect, useState } from "react";
import TodoAddButton from "../components/ui/TodoAddButton";
import Todo from "../components/Todo/Todo";
import axiosFetch from "../utils/axiosFetch";
import setAllTodo from "../utils/setAllTodo";

const Home = () => {
  const [todoBox, setTodoBox] = useState<TodoBoxType[]>([]);

  // Add a todo
  const addTodoButton = () => {
    const uuid = crypto.randomUUID();
    const todo: React.ReactNode = (
      <Todo
        key={uuid}
        inputID={uuid}
        deleteEmptyTodo={deleteEmptyTodo}
        deleteTodo={deleteTodo}
      />
    );
    const newTodo = {
      id: uuid,
      element: todo,
    };
    setTodoBox([newTodo, ...todoBox]);
  };

  // Delete an empty todo
  const deleteEmptyTodo = () => {
    setTodoBox([...todoBox]);
  };

  // Delete a todo
  const deleteTodo = async (inputID: string) => {
    await axiosFetch("/api/todo", { method: "DELETE", data: { id: inputID } });
    const todo = await setAllTodo(deleteTodo);
    setTodoBox(todo);
  };

  // Fetch all todo from database
  useEffect(() => {
    const fetchData = async () => {
      const todo = await setAllTodo(deleteTodo);
      setTodoBox(todo);
    };
    fetchData();
  }, []);

  return (
    <div className="m-10">
      <div className="flex justify-between items-center mx-4 mb-2">
        <h5 className="text-3xl font-semibold text-neutral-500">Your TODO</h5>
        <TodoAddButton handler={addTodoButton} />
      </div>
      <hr className="mb-4 rounded-full" />
      <div>
        {todoBox.length < 1 ? (
          <p className="text-neutral-400">You haven't added any todo yet.</p>
        ) : (
          <div>{todoBox.map((todo) => todo.element)}</div>
        )}
      </div>
    </div>
  );
};

export default Home;
