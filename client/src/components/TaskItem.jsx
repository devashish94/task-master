import { Link } from "react-router-dom";
import Delete from "../logo/Delete";
import DeleteModal from "../layouts/DeleteModal"
import { useEffect, useState } from "react";
import { deleteTaskById } from "../utils/mutations/deleteTaskByTaskId";
import { useQueryClient } from "react-query";

export default function TaskItem({ task, taskListId }) {
  const [deleteTaskModal, setDeleteTaskModal] = useState(false)
  const [confirmDeleteTask, setConfirmDeleteTask] = useState(false)

  const queryClient = useQueryClient()
  const taskMutation = deleteTaskById(queryClient)

  function handleDeleteTaskAction(e) {
    e.preventDefault()
    setDeleteTaskModal(!deleteTaskModal)
  }

  useEffect(function () {
    if (taskMutation.isSuccess) {
      console.log("deleted the task with id: ", task.id)
    }
  }, [taskMutation.isSuccess])

  useEffect(function () {
    if (confirmDeleteTask) {
      taskMutation.mutate({ taskId: task.id, taskListId })
    }
  }, [confirmDeleteTask])

  return (
    <>
      {deleteTaskModal && <DeleteModal onClose={() => setDeleteTaskModal(!deleteTaskModal)} confirmDelete={() => setConfirmDeleteTask(true)} headingText={"Delete Task"} buttonText={"Delete Task"} name={task.title} />}
      <Link to={`/${taskListId}/task/${task.id}`} className="w-full p-4 bg-zinc-700 hover:bg-zinc-600 bg-opacity-70 hover:bg-opacity-70 flex flex-col gap-3 rounded-lg group/task">
        <div className="flex items-center justify-between gap-2">
          <p className="font-bold text-lg whitespace-nowrap line-clamp-1 overflow-ellipsis">{task?.title}</p>
          <p className="text-zinc-400 text-sm whitespace-nowrap">Priority: {task?.priority}</p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <p className="line-clamp-1 overflow-ellipsis text-zinc-300">{task?.description}</p>
          <div onClick={handleDeleteTaskAction} className="w-fit h-fit px-2 py-1 text-sm rounded-md flex items-center whitespace-nowrap text-zinc-300 hover:text-white bg-zinc-500 hover:bg-red-700 active:bg-red-800 gap-1 opacity-0 group-hover/task:opacity-100">
            <Delete className={`w-5`} />
            <p>Delete Task</p>
          </div>
        </div>
      </Link>
    </>
  )
}