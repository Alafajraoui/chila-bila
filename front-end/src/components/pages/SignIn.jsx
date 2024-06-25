import React, { useState } from 'react';

const SignIn = () => {
const [email, setEmail]=useState("")
const [password,setPassword]=useState("")

const handleSubmit=(e)=>{
e.preventDefault();
}
// slate-100 

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <form  onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-slate-100 "
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1 bg-slate-100"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <button type="submit" className="w-full bg-[#ff385c] text-white p-2 rounded hover:bg-[#fe4869]">
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? <a href="/sign-up" className="text-[#ff385c]">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;