import { create } from 'zustand';
import { TodoStoreType } from '../@types/stores';

const useTodoStore = create<TodoStoreType>((set) => ({
  todoBox: [],
  addTodo: (todo) => (set(
    (state) => ({
      todoBox: [todo, ...state.todoBox]
    })
  )),
  deleteTodo: (id) => (set(
    state => {
      const element = state.todoBox.filter(todo => todo.id !== id);
      return {
        todoBox: element
      }
    }
  ))
}))

export default useTodoStore;