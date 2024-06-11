// import React from 'react'

const Login13 = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex w-2/3 bg-white rounded-xl shadow-md">
          <div className="flex-1 flex flex-col justify-center px-8 py-12">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <h1 className="text-3xl font-bold ml-4">Holiday.</h1>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Login And <br /> <span className="text-orange-500">Explore</span> In My World
            </h2>
            <p className="text-gray-600 mb-8">
              Explore the world around you with us with comfortable and quality services, lets join immediately and get the benefits.
            </p>
            
            <div className="bg-white rounded-xl p-8 shadow-md">
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="email"
                      id="email"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      placeholder="Benjaminrobert77@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="password"
                      id="password"
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      placeholder="•••••••••••••••••"
                    />
                  </div>
                  <div className="text-right mt-2">
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
                      Forgot my password?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">Or sign in with</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M23.625 12.281C23.625 11.375 23.531 10.594 23.406 9.844H12V14.469H18.719C18.344 16.188 17.344 17.531 15.938 18.281V21H19.375C21.531 19 23.625 15.969 23.625 12.281Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 24C15.094 24 17.656 22.969 19.375 21L15.938 18.281C15.031 18.844 13.906 19.188 12 19.188C9.03125 19.188 6.56375 17.312 5.65625 14.719H2.125V17.344C3.875 20.781 7.65625 24 12 24Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.65625 14.719C5.40625 14.156 5.25 13.531 5.25 12.875C5.25 12.219 5.40625 11.594 5.65625 11.031V8.40625H2.125C1.40625 9.875 1 11.375 1 12.875C1 14.375 1.40625 15.875 2.125 17.344L5.65625 14.719Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 6.5625C13.875 6.5625 15.5 7.219 16.75 8.40625L19.40625 5.75C17.65625 4.125 15.094 3 12 3C7.65625 3 3.875 6.21875 2.125 9.65625L5.65625 12.28125C6.56375 9.6875 9.03125 6.5625 12 6.5625Z"
                        fill="#EA4335"
                      />
                    </svg>
                    Google
                  </button>
                  <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M23.625 12.281C23.625 11.375 23.531 10.594 23.406 9.844H12V14.469H18.719C18.344 16.188 17.344 17.531 15.938 18.281V21H19.375C21.531 19 23.625 15.969 23.625 12.281Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 24C15.094 24 17.656 22.969 19.375 21L15.938 18.281C15.031 18.844 13.906 19.188 12 19.188C9.03125 19.188 6.56375 17.312 5.65625 14.719H2.125V17.344C3.875 20.781 7.65625 24 12 24Z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.65625 14.719C5.40625 14.156 5.25 13.531 5.25 12.875C5.25 12.219 5.40625 11.594 5.65625 11.031V8.40625H2.125C1.40625 9.875 1 11.375 1 12.875C1 14.375 1.40625 15.875 2.125 17.344L5.65625 14.719Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 6.5625C13.875 6.5625 15.5 7.219 16.75 8.40625L19.40625 5.75C17.65625 4.125 15.094 3 12 3C7.65625 3 3.875 6.21875 2.125 9.65625L5.65625 12.28125C6.56375 9.6875 9.03125 6.5625 12 6.5625Z"
                        fill="#EA4335"
                      />
                    </svg>
                    Apple
                  </button>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">New here? <a href="#" className="text-orange-500 hover:text-orange-600">Create an account</a></p>
              </div>
            </div>
          </div>
          <div className="w-96 bg-gray-200 mb-6 mt-6 ml-12 rounded-xl"></div>
        </div>
      </div>
    );
  }
  
  export default Login13;
  