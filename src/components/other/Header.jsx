import React, { useEffect, useState } from 'react';

const Header = ({ changeUser }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('loggedInUser');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      if (parsedUser && parsedUser.firstName) {
        setUsername(parsedUser.firstName);
      }
    }
  }, []);

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser');
    changeUser('');
  };

  return (
    <div className='flex items-end justify-between bg-[#1c1c1c] p-6 rounded shadow-md'>
      <h1 className='text-2xl font-medium text-white'>
        Hello <br />
        <span className='text-3xl font-semibold text-emerald-400'>
          {username || ''} 👋
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 hover:bg-red-700 transition-all duration-300 text-white text-base font-semibold px-6 py-2 rounded-full shadow-lg'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
