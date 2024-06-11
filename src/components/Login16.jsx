// import React from 'react'

const Login16 = () => {
    return (
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="flex-1 flex flex-col justify-between bg-gray-400 p-8 lg:p-16 rounded-br-3xl">
          <div className="text-white text-2xl">
            Ngendong
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center bg-white p-8 lg:p-16">
          <div className="w-full max-w-md">
            <nav className="flex justify-between mb-16">
              <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">About us</a>
              <a href="#" className="text-gray-600 hover:text-gray-800">Features</a>
              <a href="#" className="text-blue-600 font-bold">Sign in</a>
              <a href="#" className="bg-blue-600 text-white py-1 px-3 rounded">Register</a>
            </nav>
            <h2 className="text-gray-500 mb-2 text-sm">Welcome Back,</h2>
            <h2 className="text-4xl font-bold mb-2">Sign in to Ngendong</h2>
            <p className="text-gray-500 mb-8 text-sm">Create one new account?</p>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="mt-2 p-2 pl-10 border rounded w-full"
                    placeholder="name@email.com"
                    value="Benjaminrobert77@email.com"
                    readOnly
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    className="mt-2 p-2 pl-10 border rounded w-full"
                    placeholder="enter your password"
                    value="••••••••••••••••"
                    readOnly
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-8 mt-8">
                <a href="#" className="text-blue-600 text-sm">Forgot my password?</a>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded shadow-lg hover:bg-blue-700 transition duration-200">
                Sign in
              </button>
            </form>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-2">Or sign in with</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-gray-200 p-2 rounded-full">O</button>
                <button className="bg-gray-200 p-2 rounded-full">O</button>
                <button className="bg-gray-200 p-2 rounded-full">O</button>
                <button className="bg-gray-200 p-2 rounded-full">O</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login16;
  