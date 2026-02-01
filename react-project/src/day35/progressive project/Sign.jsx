import React from 'react'

function Sign() {
  return (
    <>
    <h1>signin form</h1>
    <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{marginTop:50}}>
      <form className="w-full max-w-sm bg-white p-6 rounded-xl shadow-lg space-y-4">
        
        <h2 className="text-2xl font-semibold text-center text-red-500">
          Login
        </h2>
        <br />
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Login
        </button>

        <div className="flex justify-between text-sm text-gray-600">
          <a href="#" className="hover:text-blue-600">
            Sign up
          </a>
          <a href="#" className="hover:text-blue-600">
            Sign in
          </a>
        </div>
      </form>
    </div>
    </>
  )
}

export default Sign
