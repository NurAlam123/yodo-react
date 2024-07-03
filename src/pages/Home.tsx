import { useEffect, useState } from "react"
import TodoAddButton from "../components/ui/TodoAddButton"
import Todo from "../components/Todo/Todo";
import useTodoStore from "../stores/useTodoStore";
import { TodoBoxType } from "../@types/stores";


const Home = () => {
  const [uniqueKey, setUniqueKey] = useState(0);

  const todoBox = useTodoStore(state => state.todoBox);
  const addTodo = useTodoStore(state => state.addTodo);

  const addTodoButton = () => {
    const uid = uniqueKey.toString();
    const newTodo: TodoBoxType = {
      id: uid,
      element: <Todo inputID={uid} key={uid} />
    };
    addTodo(newTodo);
    setUniqueKey(prevKey => prevKey + 1);
  }

  // Focus the latest input box
  useEffect(() => {
    document.getElementById(`todo-input-${uniqueKey - 1}`)?.focus();
  }, [uniqueKey])

  return (
    <div className="m-10">
      <div className="flex justify-between items-center mx-4 mb-2">
        <h5 className="text-3xl font-semibold text-neutral-500">Your TODO</h5>
        <TodoAddButton handler={addTodoButton} />
      </div>
      <hr className="mb-4 rounded-full" />
      <div>
        {
          todoBox.length < 1 ? (
            <p className="text-neutral-400">You haven't added any todo yet.</p>
          ) : (
            <div>
              {todoBox.map(todo => todo.element)}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Home