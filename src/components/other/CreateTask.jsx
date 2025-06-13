import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    }

    const updatedData = userData.map((elem) => {
      if (asignTo === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, task],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1
          }
        }
      }
      return elem
    })

    setUserData(updatedData)

    // Clear form
    setTaskTitle('')
    setCategory('')
    setAsignTo('')
    setTaskDate('')
    setTaskDescription('')
  }

  return (
    <div className='p-6 bg-[#1c1c1c] mt-5 rounded shadow-md'>
      <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-1'>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-[#2b2b2b] border border-gray-500 text-white mb-4'
              type="text"
              placeholder='Make a UI design'
              required
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-1'>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-[#2b2b2b] border border-gray-500 text-white mb-4'
              type="date"
              required
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-1'>Assign to</h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className='text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-[#2b2b2b] border border-gray-500 text-white mb-4'
              type="text"
              placeholder='Employee name'
              required
            />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='text-sm py-2 px-3 w-4/5 rounded-lg outline-none bg-[#2b2b2b] border border-gray-500 text-white mb-4'
              type="text"
              placeholder='Design, Dev, etc.'
              required
            />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className='w-full h-44 text-sm py-2 px-3 rounded-lg outline-none bg-[#2b2b2b] border border-gray-500 text-white'
            placeholder='Write detailed task description...'
            required
          />
          <button className='bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-2 px-5 rounded-full mt-5 w-full transition-all duration-300'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
