import axios from "axios"
import { useQuery } from "react-query"

export const fetchAllTaskList = function () {
  return useQuery("fetch-all-taskList", async function () {
    const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/lists/all`)
    return data
  }, {
    staleTime: Infinity,
    refetchOnWindowFocus: false
  })
}