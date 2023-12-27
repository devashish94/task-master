import { useState } from "react"
import Down from "../logo/Down"
import Plus from "../logo/Plus"
import { Link } from "react-router-dom"
import CreateTaskListModal from "./CreateTaskListModal"
import SidebarTaskLists from "../components/SidebarTaskLists"

export default function Sidebar() {
  const [modal, setModal] = useState(false)

  function preventLinkOpeningOnCollapse(e) {
    e.preventDefault()
  }

  function handleAddTaskList(e) {
    e.preventDefault()
    setModal(!modal)
  }

  return (
    <>
      {modal && <CreateTaskListModal onClose={() => setModal(!modal)} />}

      <div className="w-80 h-full bg-zinc-700 py-4 px-4 group">

        <div className="flex flex-col w-full overflow-auto gap-2">
          <Link to={`/`} className="font-bold text-zinc-300 flex items-center justify-between hover:bg-zinc-600 px-2 py-1 rounded-md">
            <p className="text-zinc-400">My Task Lists</p>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 ">
              <div onClick={handleAddTaskList} className="w-fit h-fit hover:bg-zinc-700 p-1 rounded-md">
                <Plus className={`w-6`} />
              </div>
              <div onClick={preventLinkOpeningOnCollapse} className="w-fit h-fit hover:bg-zinc-700 p-1 rounded-md">
                <Down className={`w-6`} />
              </div>
            </div>
          </Link>

          <SidebarTaskLists />
        </div>

      </div>
    </>
  )
}