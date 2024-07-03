import clsx from "clsx";
import { FaRegCircle, FaTrash } from "react-icons/fa"
import TodoInput from "./TodoInput";
import { useState } from "react";
import useTodoStore from "../../stores/useTodoStore";
import { FaRegCircleCheck } from "react-icons/fa6"

const Todo = ({ inputID }: { inputID: string }) => {

  const [changeInput, setChangeInput] = useState(false);
  const [done, setDone] = useState(false);

  const deleteTodo = useTodoStore(state => state.deleteTodo);

  return (
    <div className={clsx(
      "flex justify-between items-center gap-3 mb-2 border p-3 rounded-md",
      {
        "border-orange-500": !changeInput
      }
    )}>
      <div className="flex justify-center items-center">
        <button className="text-neutral-500">
          {
            done ?
              <FaRegCircleCheck className="size-6 text-green-500" onClick={() => setDone(!done)} /> :
              <FaRegCircle className="size-6" onClick={() => setDone(!done)} />
          }
        </button>
      </div>
      <TodoInput inputID={inputID} changeInput={changeInput} setChangeInput={setChangeInput} done={done} />
      <div>
        <button
          className="w-fit bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
          onClick={() => deleteTodo(inputID)}
        >
          <FaTrash className="size-6" />
        </button>
      </div>
    </div>
  )
}

export default Todo