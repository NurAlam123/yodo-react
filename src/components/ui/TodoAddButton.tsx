import { FaPlus } from "react-icons/fa"

const TodoAddButton = ({ handler }: { handler: () => void }) => {
  return (
    <button
      className="text-neutral-500 p-2 rounded-md bg-neutral-100 hover:bg-neutral-200 hover:text-neutral-600 transition-colors duration-300 text-3xl"
      onClick={handler}
    >
      <FaPlus />
    </button>
  )
}

export default TodoAddButton