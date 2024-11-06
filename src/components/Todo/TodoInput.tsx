import { useState } from "react";
import axiosFetch from "../../utils/axiosFetch";
// import moment from "moment";

const TodoInput = ({
  inputID,
  content,
  // time,
  done,
  changeInput,
  setChangeInput,
  deleteEmptyTodo,
}: {
  inputID: string;
  content: string;
  // time: number;
  done: boolean;
  changeInput: boolean;
  setChangeInput: React.Dispatch<React.SetStateAction<boolean>>;
  deleteEmptyTodo: () => void;
}) => {
  const [todo, setTodo] = useState("");
  const [todoContent, setTodoContent] = useState("");

  // Add or update todo
  const addTodo = async (myTodo: string) => {
    if (todoContent === todo) return;
    const exists = await axiosFetch("/api/todo/exist", {
      method: "POST",
      data: { id: inputID },
    });
    if (!exists.data.success) {
      axiosFetch("/api/todo", {
        method: "POST",
        data: { id: inputID, content: myTodo },
      });
      return;
    }
    axiosFetch("/api/todo", {
      method: "PATCH",
      data: { id: inputID, content: myTodo },
    });
  };

  // Submit form
  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const myTodo: string = event.currentTarget.todo.value;
    setTodo(myTodo);
    await addTodo(myTodo);
    setChangeInput(true);
  };

  // Remove empty todo
  const blurHandler = async (event: React.BaseSyntheticEvent) => {
    if (event.target.value !== "") {
      !done && setChangeInput(true);
      setTodo(event.target.value);
      await addTodo(event.target.value);
      return;
    }
    deleteEmptyTodo();
  };

  // Change todo on content changed
  const changeContent = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value;
    setTodoContent(value);
  };

  // Change todo on clicked input box
  const clicked = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value;
    !done && setChangeInput(false);
    setTodo(value);
    setTodoContent(value);
  };

  return (
    <div className="w-full border-s-2 border-e-2 p-2 ">
      <form onSubmit={formSubmit} className="flex items-center gap-2">
        <input
          id={`todo-${inputID}`}
          type="text"
          placeholder="Write your todo"
          className={`px-2 w-full rounded-sm outline-none ${
            done && "line-through text-neutral-400"
          }`}
          name="todo"
          defaultValue={todo ? todo : content}
          onBlur={blurHandler}
          onChange={changeContent}
          onClick={clicked}
          readOnly={changeInput}
          autoFocus
        />
        {/* <p className="text-sm text-neutral-400 outline-none w-24">
          {moment(time).fromNow()}
        </p> */}
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default TodoInput;
