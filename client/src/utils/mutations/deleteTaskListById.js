import axios from "axios"
import { useMutation, } from "react-query"

async function deleteRequestById(taskListId) {
  try {
    const { data } = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/list/delete/${taskListId}`)
    return data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const deleteTaskListById = function (queryClient) {
  return useMutation(deleteRequestById, {
    onSuccess: function () {
      queryClient.invalidateQueries("fetch-all-taskList")
    },
    onError: function () {
      console.log("error")
    }
  })
}