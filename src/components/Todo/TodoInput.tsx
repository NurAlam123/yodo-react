import clsx from "clsx";
import { useState } from "react"
import { FaRegCircle, FaTrash } from "react-icons/fa"
// import { FaRegCircleCheck } from "react-icons/fa6"

const TodoInput = ({ inputID }: { inputID: string }) => {

  const [changeInput, setChangeInput] = useState(false);
  const [todo, setTodo] = useState('');

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const myTodo = event.currentTarget.todo.value;
    setTodo(myTodo);
    setChangeInput(true);
  }

  return (
    <div className={clsx(
      "flex justify-between items-center gap-3 mb-2 border p-3 rounded-md",
      { "border-orange-500": !changeInput }
    )}>
      <div className="flex justify-center items-center">
        <button className="text-neutral-500">
          <FaRegCircle className="size-6" />
          {/* <FaRegCircleCheck className="size-6" /> */}
        </button>
      </div>
      <div className="w-full">
        <form onSubmit={formSubmit}>
          <input
            id={`todo-input-${inputID}`}
            type="text"
            placeholder="Write your todo"
            className="border-s-2 border-e-2 px-2 w-full rounded-sm outline-none"
            name="todo"
            defaultValue={todo}
            onBlur={() => setChangeInput(true)}
            onClick={() => setChangeInput(false)}
            readOnly={changeInput}
          />
          <input type="submit" hidden />
        </form>
      </div>
      <div>
        <button className="w-fit bg-red-500 text-white p-2 rounded-md">
          <FaTrash className="size-6" />
        </button>
      </div>
    </div>
  )
}

export default TodoInput