import { fetchAllTaskList } from "../utils/queries/fetchAllTaskLists"
import TaskListItemSidebar from "./TaskListItemSidebar"

export default function SidebarTaskLists() {

  const { data: taskLists, isLoading, isError } = fetchAllTaskList()

  return (
    <div className="flex flex-col w-full overflow-auto gap-1">
      {isLoading && <p className="font-bold text-zinc-300 text-sm">Loading Task Lists</p>}
      {isError && <p className="font-bold text-zinc-300 text-sm">Error fetching Task Lists</p>}
      {taskLists && taskLists.map(function (taskList) {
        return <TaskListItemSidebar key={taskList.id} taskList={taskList} />
      })}
    </div>
  )
}