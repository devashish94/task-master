import { useParams } from "react-router-dom"
import TaskItem from "./TaskItem"
import { fetchTaskListById } from "../utils/queries/fetchTaskListById"
import DeleteTaskListButton from "./DeleteTaskListButton"
import AddNewTaskButton from "./AddNewTaskButton"
import { fetchTasksByTaskListId } from "../utils/queries/fetchTaskByTaskListId"

export default function TaskListPage() {
  const { taskListId } = useParams()

  const { data: taskList } = fetchTaskListById(taskListId)
  const { data: tasks, isLoading, isError } = fetchTasksByTaskListId(taskListId)

  return (
    <div className="w-full h-full p-10">

      <div className="flex items-center justify-between">
        <p className="font-bold text-4xl mb-10 flex items-center line-clamp-1 overflow-ellipsis whitespace-nowrap">{taskList?.listName}</p>
        <div className="flex gap-4">
          <AddNewTaskButton />
          <DeleteTaskListButton listName={taskList?.listName} />
        </div>
      </div>

      <div className="overflow-auto flex-1 mt-10 flex flex-col gap-4">
        {isLoading && <p className="font-bold text-zinc-300 text-sm">Loading Tasks</p>}
        {isError && <p className="font-bold text-zinc-300 text-sm">Error fetching Tasks</p>}
        {!tasks || (tasks && tasks.length) === 0 && <p className="font-bold text-zinc-300 text-3xl self-end">No tasks yet 🎉</p>}
        {tasks && tasks.map(function (task) {
          return <TaskItem key={task.id} taskListId={taskListId} task={task} />
        })}
      </div>
    </div>
  )
}