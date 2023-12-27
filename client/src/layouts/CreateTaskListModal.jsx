import { createPortal } from "react-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Hash from "../logo/Hash"
import { useQueryClient } from "react-query"
import { createTaskList } from "../utils/mutations/createTaskList"

export default function CreateTaskModal({ onClose }) {
  const [inputValue, setInputValue] = useState("")

  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const mutation = createTaskList(queryClient)

  useEffect(function () {
    document.getElementById("tasklist-input").focus()
  }, [])

  useEffect(function () {
    if (mutation.isSuccess) {
      console.log('[mutation data]', mutation.data)
      onClose()
      navigate(`/${mutation.data.id}`)
    }
  }, [mutation.isSuccess])

  function handleNewTaskListCreation() {
    const taskListName = document.getElementById("tasklist-input")
    console.log("[input field value]", taskListName.value)

    mutation.mutate({ listName: taskListName.value })
  }

  return (
    createPortal(
      <div className="text-white w-screen h-screen absolute left-0 top-0 flex justify-center items-center">
        <div onClick={onClose} className="bg-black left-0 top-0 w-screen h-screen bg-opacity-50 absolute z-10"></div>

        <div className="bg-zinc-700 border border-zinc-600 rounded-lg drop-shadow-xl z-20 flex flex-col divide-y divide-zinc-600 justify-between">
          <p className="font-bold text-xl w-full px-4 py-3">Create New Task List</p>

          <div className="flex-1 flex flex-col justify-between px-8 py-4 gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <p className="font-bold text-zinc-300 gap-1 flex items-center">List Name</p>
              <div className="gap-1 flex items-center">
                <Hash className={`w-4 text-zinc-300`} />
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} id="tasklist-input" className="bg-inherit font-bold flex-1 outline-none" placeholder="Task List Name" />
              </div>
            </div>
            <p className="text-sm text-zinc-400">This is the task list creation dialog, once created you can add tasks to it</p>
            <div className="flex items-center self-end gap-3">
              <button onClick={onClose} className="px-3 text-sm py-2 font-bold bg-zinc-600 hover:bg-zinc-500 rounded-md">Cancel</button>
              <button disabled={inputValue.length == 0} onClick={handleNewTaskListCreation} className={`px-5 text-sm py-2 font-bold active:scale-95 duration-200 bg-purple-700 hover:bg-purple-400 disabled:hover:cursor-not-allowed disabled:opacity-50 ${inputValue.length == 0 ? "hover:cursor-not-allowed" : ""} rounded-md`}>Add Task List</button>
            </div>
          </div>

        </div>
      </div>
      , document.getElementById('modal'))
  )
}