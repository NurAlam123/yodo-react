// @types.zustand.store

export type TodoBoxType = {
  id: string,
  element: React.ReactNode
}

export type TodoStoreType = {
  todoBox: TodoBoxType[],
  addTodo: (todo: TodoBoxType) => void,
  deleteTodo: (id: string) => void,
}