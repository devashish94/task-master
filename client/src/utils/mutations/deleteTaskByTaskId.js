import axios from "axios"
import { useMutation } from "react-query"

async function deleteTaskRequestById({ taskId, taskListId }) {
  try {
    console.log(taskId, taskListId)
    const { data } = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/task/delete/${taskId}`)
    return data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const deleteTaskById = function (queryClient) {
  return useMutation(deleteTaskRequestById, {
    onSuccess: function () {
      queryClient.invalidateQueries("fetch-tasks-by-tasklist-id")
    },
    onError: function () {
      console.log("error")
    }
  })
}