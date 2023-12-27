import { Link } from "react-router-dom"
import Hash from "../logo/Hash"

export default function TaskListItem({ taskList }) {

  return (
    <Link to={`/${taskList.id}`} className="outline-none w-full py-3 px-8 bg-zinc-700 hover:bg-zinc-600 active:scale-[98%] transition-transform duration-200 flex items-center justify-between rounded-lg" >
      <div className="flex gap-2 items-center text-lg">
        <p className="text-zinc-400">
          <Hash className={`w-4`} />
        </p>
        <p className="">{taskList?.listName}</p>
      </div>
      {/* <p className="text-zinc-300 font-bold">Tasks: {taskList?.tasks?.length}</p> */}
    </Link>
  )
}

/**
 * RE-WRITE THE BACKEND WITH SEPARATE TASKLIST AND TASK COLLECTIONS
 * MAKE SURE TO CORRECTLY HANDLE ERRORS
 */
