import { useEffect } from "react"
import { createPortal } from "react-dom"
import { useQueryClient } from "react-query"
import { useParams } from "react-router-dom"
import { createTaskByTaskListId } from "../utils/mutations/createTaskByTaskListId"

export default function NewTaskModal({ onClose }) {
  const { taskListId } = useParams()
  const queryClient = useQueryClient()

  useEffect(function () {
    document.getElementById("title-input").focus()
  }, [])

  const taskMutation = createTaskByTaskListId(queryClient)

  function handleCreateNewTask() {
    const titleInput = document.getElementById("title-input")
    const descriptionInput = document.getElementById("description")
    const prioritySelect = document.getElementById("priority-select")

    const data = {
      title: titleInput.value,
      description: descriptionInput.value,
      priority: prioritySelect.value
    }

    taskMutation.mutate({ taskListId, task: data })
  }

  useEffect(function () {
    if (taskMutation.isSuccess) {
      onClose()
    }
  }, [taskMutation.isSuccess])

  return (
    createPortal(
      <div className="text-white w-screen h-screen absolute left-0 top-0 flex justify-center items-center">
        <div onClick={onClose} className="bg-black left-0 top-0 w-screen h-screen bg-opacity-50 absolute z-10"></div>

        <div className="bg-zinc-700 border border-zinc-600 rounded-lg drop-shadow-xl z-20 flex flex-col divide-y divide-zinc-600 justify-between">
          <p className="font-bold text-xl w-full px-4 py-3">Create New Task</p>

          <div className="flex-1 flex flex-col justify-between px-8 py-4 gap-4">

            <div className="flex justify-center flex-col gap-3">
              <div className="flex items-center gap-2">
                <input id="title-input" type="text" className="bg-inherit font-bold outline-none text-2xl text-zinc-200" placeholder="Title" />
              </div>
              <div className="flex items-center gap-2">
                <textarea id="description" type="text" className="bg-inherit outline-none w-full max-h-40 min-h-12 text-zinc-200" rows={2} placeholder="Give a description about the task" />
              </div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-zinc-400">Priority</p>
                <select name="priority" id="priority-select" className="w-fit bg-zinc-700 outline-none text-zinc-400 rounded-md border-0">
                  <option className="bg-zinc-700 text-zinc-300 flex" value="High">High</option>
                  <option className="bg-zinc-700 text-zinc-300" value="Medium">Medium</option>
                  <option className="bg-zinc-700 text-zinc-300" value="Low">Low</option>
                </select>
              </div>
            </div>

            <div className="flex items-center self-end gap-3">
              <button onClick={onClose} className="px-3 text-sm py-2 font-bold bg-zinc-600 hover:bg-zinc-500 rounded-md">Cancel</button>
              <button onClick={handleCreateNewTask} className={`px-5 text-sm py-2 font-bold active:scale-95 duration-200 bg-purple-700 hover:bg-purple-400 rounded-md`}>Add Task</button>
            </div>
          </div>

        </div>
      </div>
      , document.getElementById('modal'))
  )
}