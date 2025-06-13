// Login.jsx
import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-emerald-200 via-emerald-100 to-white">
      <div className="bg-white shadow-2xl rounded-3xl px-12 py-10 w-[90%] max-w-md">
        <h2 className="text-3xl font-bold text-emerald-600 mb-6 text-center">Welcome Back 👋</h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white text-gray-800 outline-none border border-emerald-400 focus:ring-2 focus:ring-emerald-500 rounded-full px-6 py-3 text-lg placeholder-gray-500"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-white text-gray-800 outline-none border border-emerald-400 focus:ring-2 focus:ring-emerald-500 rounded-full px-6 py-3 text-lg placeholder-gray-500"
            type="password"
            placeholder="Enter password"
          />
          <button
            type="submit"
            className="mt-3 bg-emerald-600 hover:bg-emerald-700 transition-all text-white text-lg font-semibold py-3 rounded-full shadow-md"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
