// import React from 'react'

const Login11 = () => {
  return (
    
   
    <div className="min-h-screen flex">
      <div className="flex-1 text-white flex flex-col justify-center p-4" style={{backgroundColor:"#626262"}}>
        <h1 className="text-4xl font-bold mb-4 ml-8">Travelic.</h1>
        <p className="text-sm ml-8">
          Explore the world around you with us with comfortable and quality
          services, <br />lets join immediately and get the benefits
        </p>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-sm text-gray-600 mb-5">Welcome Back,</h2>
          <h3 className="text-4xl font-bold mb-5">Sign in to Travelic.</h3>
          <h2 className="text-sm text-gray-600 mb-16">Create one new account ?</h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Benjaminrobert77@email.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="•••••••••••••••••"
              />
              <div className="text-right mt-2">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot my password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              Or sign in with
            </p>
            <div className="mt-3 flex justify-center space-x-4">
              <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Faceboy
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Marasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Login11