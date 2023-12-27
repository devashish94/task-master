import MainWindow from "./layouts/MainWindow"
import Sidebar from "./layouts/Sidebar"

function App() {
  return (
    <div className="bg-black text-white w-screen h-screen flex">
      <Sidebar />
      <MainWindow />
    </div>
  )
}

export default App
