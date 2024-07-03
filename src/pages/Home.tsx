import { useEffect, useState } from "react"
import TodoAddButton from "../components/ui/TodoAddButton"
import TodoInput from "../components/Todo/TodoInput";


const Home = () => {
  const [todoBox, setTodoBox] = useState<React.ReactNode[]>([]);

  const addTodo = () => {
    const len = todoBox.length.toString();
    const newTodo = [<TodoInput key={len} inputID={len} />, ...todoBox];
    setTodoBox(newTodo);
  }

  // Focus the latest input box
  useEffect(() => {
    document.getElementById(`todo-input-${todoBox.length - 1}`)?.focus();
  }, [todoBox])

  return (
    <div className="m-10">
      <div className="flex justify-between items-center mx-4 mb-2">
        <h5 className="text-3xl font-semibold text-neutral-500">Your TODO</h5>
        <TodoAddButton handler={addTodo} />
      </div>
      <hr className="mb-4 rounded-full" />
      <div>
        {/* <p className="text-neutral-400">You haven't added any todo yet.</p> */}
        <div>
          {todoBox}
        </div>
      </div>
    </div>
  )
}

export default Home