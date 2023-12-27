import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Delete from "../logo/Delete"
import DeleteModal from "../layouts/DeleteModal"
import { useQueryClient } from "react-query"
import { deleteTaskListById } from "../utils/mutations/deleteTaskListById"

export default function DeleteTaskList({ listName }) {
  const [deleteModal, setDeleteModal] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)

  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { taskListId } = useParams()

  const deleteMutation = deleteTaskListById(queryClient)

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

  return (
    <>
      {deleteModal &&
        <DeleteModal
          onClose={() => setDeleteModal(!deleteModal)}
          confirmDelete={() => setConfirmDelete(true)}
          name={listName}
          headingText={"Delete Task"}
          buttonText={"Delete Task"}
        />
      }
      <button onClick={handleDeleteTaskList} className="whitespace-nowrap flex items-center gap-1 bg-zinc-700 hover:bg-red-600 active:scale-90 rounded-md duration-100 px-3 py-2">
        <Delete className={`w-5`} />
        <p className="">Delete List</p>
      </button>
    </>
  )
}