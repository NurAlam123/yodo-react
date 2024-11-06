import clsx from "clsx";
import { FaRegCircle, FaTrash } from "react-icons/fa";
import TodoInput from "./TodoInput";
import { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import axiosFetch from "../../utils/axiosFetch";

const Todo = ({
  inputID,
  todoData,
  deleteEmptyTodo,
  deleteTodo,
  readonly = false,
  checked = false,
}: {
  inputID: string;
  todoData?: Todo;
  deleteEmptyTodo?: () => void;
  deleteTodo: (inputID: string) => void;
  readonly?: boolean;
  checked?: boolean;
}) => {
  const [changeInput, setChangeInput] = useState(readonly);
  const [done, setDone] = useState(checked);

  const checkTodo = async () => {
    setDone(!done);
    await axiosFetch("/api/todo", {
      method: "PATCH",
      data: { id: inputID, done: !done },
    });
  };

  return (
    <div
      className={clsx(
        "flex justify-between items-center gap-3 mb-2 border p-3 rounded-md",
        {
          "border-orange-500": !changeInput,
        }
      )}
    >
      <div className="flex justify-center items-center">
        <button className="text-neutral-500">
          {done ? (
            <FaRegCircleCheck
              className="size-6 text-green-500"
              onClick={checkTodo}
            />
          ) : (
            <FaRegCircle className="size-6" onClick={checkTodo} />
          )}
        </button>
      </div>
      <TodoInput
        inputID={inputID}
        content={todoData?.content || ""}
        done={todoData?.done || done}
        changeInput={changeInput}
        setChangeInput={setChangeInput}
        deleteEmptyTodo={deleteEmptyTodo ? deleteEmptyTodo : () => {}}
      />
      <div>
        <button
          className="w-fit bg-red-500 hover:bg-red-600 text-white p-2 rounded-md"
          onClick={() => deleteTodo(inputID)}
        >
          <FaTrash className="size-6" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
