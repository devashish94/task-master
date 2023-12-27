import { Route, Routes } from "react-router-dom";
import AllTaskListsPage from "../components/AllTaskListsPage";
import TaskListPage from "../components/TaskListPage"
import TaskPage from "../components/TaskPage";

export default function MainWindow() {
  return (
    <div className="h-full flex-1 bg-zinc-800 flex justify-center">
      <div className="w-full h-full max-w-screen-lg">
        <Routes>
          <Route path="/" exact element={<AllTaskListsPage />} />
          <Route path="/:taskListId/task/:taskId" element={<TaskPage />} />
          <Route path="/:taskListId" element={<TaskListPage />} />
        </Routes>
      </div>
    </div>
  )
}