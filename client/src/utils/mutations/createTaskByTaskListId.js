import axios from "axios"
import { useMutation, } from "react-query"

async function createTask({ taskListId, task }) {
  try {
    const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/task/create/list/${taskListId}`, task)
    return data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const createTaskByTaskListId = function (queryClient) {
  return useMutation(createTask, {
    onSuccess: function () {
      queryClient.invalidateQueries("fetch-tasks-by-tasklist-id")
    },
    onError: function () {
      console.log("error")
    }
  })
}
