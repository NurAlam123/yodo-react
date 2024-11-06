import { create } from "zustand";

const useTodoStore = create<TodoStore>((set) => ({
  todoBox: [],
  setTodoBox: (allTodo) =>
    set((state) => ({
      todoBox: [...state.todoBox, ...allTodo],
    })),
}));

export default useTodoStore;
