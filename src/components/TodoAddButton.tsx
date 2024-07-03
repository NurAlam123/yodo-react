import { FaPlus } from "react-icons/fa"

const TodoAddButton = () => {
  return (
    <div className="text-neutral-500 border border-dashed p-2 rounded-md bg-neutral-100 cursor-pointer hover:bg-neutral-200 hover:text-neutral-600 transition-colors duration-300">
      <FaPlus />
    </div>
  )
}

export default TodoAddButton