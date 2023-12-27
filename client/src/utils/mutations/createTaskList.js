import axios from "axios"
import { useMutation, } from "react-query"

async function createNewTaskList(taskList) {
  try {
    const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/list/create`, taskList)
    return data
  } catch (err) {
    console.log(err)
    throw err
  }
}

export const createTaskList = function (queryClient) {
  return useMutation(createNewTaskList, {
    onSuccess: function () {
      queryClient.invalidateQueries("fetch-all-taskList")
    },
    onError: function () {
      console.log("error")
    }
  })
}