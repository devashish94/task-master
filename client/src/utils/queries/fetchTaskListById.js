import axios from "axios"
import { useQuery } from "react-query"

export const fetchTaskListById = function (taskListId) {
  return useQuery(["fetch-tasklist-by-id", taskListId], async function () {
    const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/list/${taskListId}`)
    return data
  }, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    enabled: !!taskListId
  })
}