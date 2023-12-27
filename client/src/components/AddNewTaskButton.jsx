import { useState } from "react";
import NewTaskModal from "../layouts/NewTaskModal";
import Plus from "../logo/Plus"

export default function AddNewTaskButton() {
  const [newTaskModal, setNewTaskModal] = useState(false)

  return (
    <>
      {newTaskModal && <NewTaskModal onClose={() => setNewTaskModal(false)} />}
      <button onClick={() => setNewTaskModal(true)} className="text-zinc-100 bg-opacity-90 hover:bg-opacity-90 whitespace-nowrap flex items-center gap-1 bg-purple-700 hover:bg-purple-500 active:scale-90 rounded-md duration-100 px-3 py-2">
        <Plus className={`w-5`} />
        <p className="font-bold">Add Task</p>
      </button>
    </>
  )
}