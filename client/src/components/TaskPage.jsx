import { useParams } from "react-router-dom"
import { fetchTaskById } from "../utils/queries/fetchTaskById"

export default function TaskPage() {
  const { taskListId, taskId } = useParams()
  const { data: task, isLoading, isError } = fetchTaskById(taskListId, taskId)

  return (
    <div className="w-full h-full flex flex-col py-10 px-20">
      <div className="flex justify-between items-center">
        <p className="font-bold text-5xl">{task?.title}</p>
        <p>{task?.priority}</p>
      </div>
      <p className="text-zinc-200 mt-16">{task?.description}</p>
    </div>
  )
}