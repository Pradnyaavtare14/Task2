// import React from 'react'

const Login14 = () => {
  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2">Scool.co</h2>
        <p className="text-gray-600 mb-4">Welcome Back To School</p>
        <p className="text-xs mb-6  text-gray-500"> Come on, go to school here and get extensive knowledge</p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-2 p-2 border rounded w-full"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-2 p-2 border rounded w-full"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span className="ml-2 text-gray-700">Remember this device</span>
            </label>
            <a href="#" className="text-blue-600 text-sm">Forgot my password?</a>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded shadow-lg hover:bg-blue-700 transition duration-200">
            Sign in
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">Or sign in with</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gray-200 p-2 rounded-full">
              {/* Replace these with actual icons */}
              O
            </button>
            <button className="bg-gray-200 p-2 rounded-full">
              O
            </button>
            <button className="bg-gray-200 p-2 rounded-full">
              O
            </button>
            <button className="bg-gray-200 p-2 rounded-full">
              O
            </button>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            New here? <a href="#" className="text-blue-600">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login14