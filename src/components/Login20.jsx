// import React from 'react'

const Login20 = () => {
    return (
      <div className="min-h-screen flex items-start justify-start bg-gray-100 relative">
        {/* Absolute positioned square */}
        <div className="absolute top-0 right-0 h-1/2 bg-gray-300 w-1/2"></div>
  
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-20 ml-52">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign in Now!</h2>
          <p className="text-center mb-6">
            Style according to your style and get interesting tips about lifestyle that is modern and contemporary
          </p>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg mb-4 flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.04c-5.522 0-10 4.477-10 10 0 4.424 2.877 8.195 6.844 9.51.5.092.682-.217.682-.482 0-.237-.008-.866-.012-1.7-2.782.604-3.369-1.34-3.369-1.34-.455-1.157-1.11-1.464-1.11-1.464-.908-.62.07-.607.07-.607 1.004.071 1.534 1.032 1.534 1.032.892 1.528 2.34 1.087 2.91.832.09-.648.35-1.086.636-1.336-2.22-.252-4.555-1.11-4.555-4.945 0-1.091.39-1.983 1.029-2.682-.103-.252-.446-1.267.098-2.64 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.807c.854.004 1.71.116 2.513.339 1.91-1.294 2.75-1.025 2.75-1.025.546 1.373.203 2.388.1 2.64.64.699 1.029 1.591 1.029 2.682 0 3.844-2.338 4.69-4.565 4.935.36.31.682.927.682 1.867 0 1.348-.012 2.435-.012 2.767 0 .267.18.578.688.48A10.004 10.004 0 0 0 22 12.04c0-5.523-4.477-10-10-10z"></path>
            </svg>
            Sign in with Facebook
          </button>
          <div className="flex items-center justify-center mb-4 mt-5">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <span className="text-xs text-center text-gray-500 uppercase mx-2 ">or</span>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="E-mail"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot my password?
              </a>
            </div>
            <div className="mb-4 mt-8">
              <button
                className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign in
              </button>
            </div>
            <div className="text-center mt-12">
              <span>Dont have an account yet? </span>
              <a className="font-bold text-sm text-blue-500 hover:text-blue-800 " href="#">
                Create an account
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login20;
  