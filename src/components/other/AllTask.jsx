
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-6 rounded-xl mt-6 shadow-md text-white">
      <div className="hidden md:flex bg-gradient-to-r from-emerald-500 to-emerald-700 mb-4 py-3 px-4 rounded-lg font-semibold text-white">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5 text-center">New Task</h3>
        <h5 className="w-1/5 text-center">Active Task</h5>
        <h5 className="w-1/5 text-center">Completed</h5>
        <h5 className="w-1/5 text-center">Failed</h5>
      </div>

      <div className="flex flex-col gap-3">
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row justify-between items-center border border-emerald-400 p-4 rounded-lg bg-[#2c2c2c] hover:scale-[1.02] transition-all"
          >
            <h2 className="w-full md:w-1/5 font-semibold text-emerald-400 text-center">{elem.firstName}</h2>
            <h3 className="w-full md:w-1/5 text-blue-400 text-center">{elem.taskCounts.newTask}</h3>
            <h5 className="w-full md:w-1/5 text-yellow-400 text-center">{elem.taskCounts.active}</h5>
            <h5 className="w-full md:w-1/5 text-green-400 text-center">{elem.taskCounts.completed}</h5>
            <h5 className="w-full md:w-1/5 text-red-500 text-center">{elem.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
