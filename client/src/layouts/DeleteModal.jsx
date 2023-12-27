import { createPortal } from "react-dom"
import { useEffect, useState } from "react"

export default function CreateTaskModal({ onClose, confirmDelete, headingText, buttonText, name }) {

  function handleDeleteButtonClick(e) {
    confirmDelete()
    onClose()
  }

  return (
    createPortal(
      <div className="text-white w-screen h-screen absolute left-0 top-0 flex justify-center items-center">
        <div onClick={onClose} className="bg-black left-0 top-0 w-screen h-screen bg-opacity-50 absolute z-10"></div>

        <div className="bg-zinc-700 border border-zinc-600 rounded-lg drop-shadow-xl z-20 flex flex-col divide-y divide-zinc-600 justify-between">
          <p className="font-bold text-xl w-full px-4 py-3">{headingText}</p>

          <div className="flex-1 flex flex-col justify-between px-8 py-4 gap-4">
            <div className="flex items-center gap-1">
              <p className="">Are you sure you want to delete</p>
              <p className="font-bold line-clamp-1 overflow-ellipsis max-w-[100%] sm:max-w-[300px]">{name}?</p>
            </div>
            <div className="flex items-center self-end gap-3">
              <button onClick={onClose} className="px-3 text-sm py-2 font-bold bg-zinc-600 hover:bg-zinc-500 rounded-md">Cancel</button>
              <button onClick={handleDeleteButtonClick} className={`px-5 text-sm py-2 font-bold active:scale-95 duration-200 bg-purple-700 hover:bg-purple-400 rounded-md`}>{buttonText}</button>
            </div>
          </div>

        </div>
      </div>
      , document.getElementById('modal'))
  )
}