import axios from "axios"
import { useQuery } from "react-query"

export const fetchTaskById = function (tasklistId, taskId) {
  return useQuery(["fetch-task-by-id", tasklistId, taskId], async function () {
    const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/task/${taskId}`)
    return data
  }, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    enabled: !!taskId
  })
}