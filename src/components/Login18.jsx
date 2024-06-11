// import React from 'react'

const Login18 = () => {
  return (
   
    <div className="min-h-screen flex items-end justify-end bg-gray-500">
      <div className="max-w-lg w-full bg-white p-10 rounded-lg shadow-lg mr-20 mb-12">
        <div className="flex justify-between ">
          <h2 className="text-3xl font-bold mb-4">Sign in Now !</h2>
          <button className="text-gray-500 text-lg">✕</button>
        </div>
        <p className="text-gray-600 mb-8 text-xs">
          Let’s vacation right now with tickets from us at affordable prices and also trusted, friendly service and the best
        </p>
        <div className="flex justify-between mb-6">
          <button className="w-1/2 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 flex justify-center items-center mr-2">
            <input type="radio" id="twiwiw" name="signin" className="mr-2" />
            <label htmlFor="twiwiw">Sign in with Twiwiw</label>
          </button>
          <button className="w-1/2 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100 flex justify-center items-center">
            <input type="radio" id="marasi" name="signin" className="mr-2" />
            <label htmlFor="marasi">Sign in with Marasi</label>
          </button>
        </div>
        <div className="text-center mb-6 text-gray-500 text-xs">Or sign in with</div>
        <form>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-2" htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-3 border border-gray-300 rounded-lg pl-12"
              value="Benjaminrobert@email.com"
              readOnly
            />
            {/* <span className="absolute inset-y-0 left-0 pl-4 flex items-center">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.94 6.94A7 7 0 0010 17a7 7 0 007-7 7 7 0 10-14 0zM9 11V9h2v2H9zm0 4v-2h2v2H9z" />
              </svg>
            </span> */}
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full p-3 border border-gray-300 rounded-lg pl-12"
              placeholder="enter your password"
            />
            {/* <span className="absolute inset-y-0 left-0 pl-4 flex items-center">
              <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 4a3 3 0 00-3 3v2H5a1 1 0 000 2h10a1 1 0 000-2h-2V7a3 3 0 00-3-3zM8 7a2 2 0 114 0v2H8V7zM5 12a1 1 0 011-1h8a1 1 0 011 1v4H5v-4z" />
              </svg>
            </span> */}
          </div>
          <div className="flex justify-between items-center mb-6">
            <a href="#" className="text-sm text-gray-500">Forgot my password?</a>
          </div>
          <button 
            type="submit" 
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold">
            Sign in
          </button>
        </form>
        <div className="text-center mt-12">
          <span className="text-sm text-gray-500">Dont have an account yet? <a href="#" className="text-orange-600">Create an account</a></span>
        </div>
      </div>
    </div>
  );
}


export default Login18