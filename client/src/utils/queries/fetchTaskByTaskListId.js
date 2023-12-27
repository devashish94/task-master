import axios from "axios"
import { useQuery } from "react-query"

export const fetchTasksByTaskListId = function (taskListId) {
  return useQuery(["fetch-tasks-by-tasklist-id", taskListId], async function () {
    const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/tasks/list/${taskListId}`)
    return data
  }, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    enabled: !!taskListId
  })
}