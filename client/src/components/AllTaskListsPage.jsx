import TaskListItem from "./TaskListItem"
import { fetchAllTaskList } from "../utils/queries/fetchAllTaskLists"

export default function AllTaskList() {
  const { data: taskLists, isLoading, isError } = fetchAllTaskList()

  return (
    <div className="w-full h-full p-10">
      <p className="font-bold text-5xl mb-2">Hi User 👋,</p>
      <p className="font text-2xl text-zinc-400">these are your task lists</p>

      <div className="overflow-auto flex-1 mt-10 flex flex-col gap-4">
        {isLoading && <p className="font-bold text-zinc-300 text-sm">Loading Task Lists</p>}
        {isError && <p className="font-bold text-zinc-300 text-sm">Error fetching Task Lists</p>}
        {taskLists && taskLists.map(function (taskList) {
          return <TaskListItem key={taskList.id} taskList={taskList} />
        })}
      </div>
    </div>

  )
}
