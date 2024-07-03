import TodoAddButton from "../components/TodoAddButton"

const Home = () => {
  return (
    <div className="m-10">
      <div className="flex justify-between items-center mx-4 mb-2">
        <h5 className="text-lg font-semibold text-neutral-500">Your TODO</h5>
        <TodoAddButton />
      </div>
      <hr className="mb-4 rounded-full" />
      <div>
        {/* <p className="text-neutral-400">You haven't added any todo yet.</p> */}
        <div>

        </div>
      </div>
      {/* <div className="flex justify-center items-center w-full">
        <input type="text" className="p-2 border w-full" />
      </div> */}
    </div>
  )
}

export default Home