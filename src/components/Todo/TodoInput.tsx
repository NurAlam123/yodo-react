import clsx from "clsx";
import { useState } from "react";
import useTodoStore from "../../stores/useTodoStore";

const TodoInput = (
  {
    inputID,
    done,
    changeInput,
    setChangeInput
  }: {
    inputID: string,
    done: boolean,
    changeInput: boolean,
    setChangeInput: React.Dispatch<React.SetStateAction<boolean>>
  }) => {

  const [todo, setTodo] = useState('');
  const deleteTodo = useTodoStore(state => state.deleteTodo);

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const myTodo = event.currentTarget.todo.value;
    setTodo(myTodo);
    setChangeInput(true);
  }

  // Remove empty todo
  const blurHandler = (event: React.BaseSyntheticEvent) => {
    if (event.target.value !== '') {
      !done && setChangeInput(true);
      return;
    }
    deleteTodo(inputID);
  }

  return (
    <div className="w-full border-s-2 border-e-2 p-2 ">
      <form onSubmit={formSubmit} className="flex items-center gap-2">
        <input
          id={`todo-input-${inputID}`}
          type="text"
          placeholder="Write your todo"
          className={clsx(
            "px-2 w-full rounded-sm outline-none",
            {
              "line-through text-neutral-400": done
            }
          )}
          name="todo"
          defaultValue={todo}
          onBlur={blurHandler}
          onClick={() => !done && setChangeInput(false)}
          readOnly={changeInput}
        />
        <p className="text-sm text-neutral-400 outline-none w-24">60 minutes ago</p>
        <input type="submit" hidden />
      </form>
    </div>
  )
}

export default TodoInput