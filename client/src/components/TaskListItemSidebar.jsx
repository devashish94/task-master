import { Link, useNavigate, useParams } from "react-router-dom"
import Delete from "../logo/Delete"
import DeleteModal from "../layouts/DeleteModal"
import { useEffect, useState } from "react"
import { useQueryClient } from "react-query"
import { deleteTaskListById } from "../utils/mutations/deleteTaskListById"

export default function TaskListItemSidebar({ taskList }) {
  const [deleteModal, setDeleteModal] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const deleteMutation = deleteTaskListById(queryClient)
  const { id: taskListId } = taskList

  useEffect(function () {
    if (deleteMutation.isSuccess) {
      console.log("successfully deleted task list with ID: ", taskListId)
      navigate('/')
    }
  }, [deleteMutation.isSuccess])

  useEffect(function () {
    if (confirmDelete) {
      deleteMutation.mutate(taskListId)
    }
  }, [confirmDelete])

  function handleDeleteTaskList(e) {
    e.preventDefault()
    setDeleteModal(!deleteModal)
  }

  const urlTaskListId = window.location.pathname.split("/")[1]

  return (
    <>
      {deleteModal &&
        <DeleteModal
          onClose={() => setDeleteModal(!deleteModal)}
          confirmDelete={() => setConfirmDelete(true)}
          name={taskList.listName}
          headingText={`Delete Task List`}
          buttonText={`Delete Task List`}
        />}
      <Link to={`/${taskList.id}`} className={`py-2 px-3 w-full duration-200 ease-in-out transition-transform active:scale-95 ${urlTaskListId === taskListId ? "bg-purple-500 hover:bg-purple-600 hover:bg-opacity-60 bg-opacity-60" : "hover:bg-zinc-600"} flex items-center justify-between rounded-md gap-2 group/item`}>
        <div className="flex items-center gap-2">
          <p className={`text-zinc-400`}>#</p>
          <p className="text-white">{taskList.listName}</p>
        </div>
        <div onClick={handleDeleteTaskList} className="w-fit h-fit p-1 rounded-lg opacity-0 group-hover/item:opacity-100 hover:bg-red-500 fill-red-500">
          <Delete className={`w-5`} />
        </div>
      </Link>
    </>
  )
}
