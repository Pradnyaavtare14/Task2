// import React from 'react'

const Login15 = () => {
    return (
      <div className="flex items-center justify-center min-h-screen h-full w-full">
        <div className="flex flex-col lg:flex-row w-full h-full">
          <div className="flex-1 flex items-center justify-center bg-gray-800 p-8 lg:p-16 text-white">
            <div>
              <h1 className="text-4xl font-bold mb-4">Learn to <br />Mobile And <br />
               Web Programming!</h1>
              <p className="text-gray-300 mb-8">
                Lets learn a programming language, the language of the future of mankind with unlimited technological power.
              </p>
              <button className="flex items-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M10 5a1 1 0 00-.894.553L7.382 9H4a1 1 0 000 2h3.382l1.724 3.447a1 1 0 001.788-.894l-1.724-3.447H16a1 1 0 000-2H9.618l1.724-3.447A1 1 0 0010 5z" /></svg>
                Watch Demo
              </button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center bg-white p-8 lg:p-16">
            <div className="w-full max-w-md">
              <h2 className="text-4xl font-bold mb-4">Sign in And Learn Our Course</h2>
              <p className="text-gray-600 mb-8 text-xs">
                Create onAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </p>
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">E-mail</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="mt-2 p-2 pl-10 border rounded w-full"
                      placeholder="name@email.com"
                    />
                    {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2.94 4.94a1 1 0 011.4 0L10 10.586 15.66 4.94a1 1 0 011.4 1.42L10 13.414l-7.06-7.06a1 1 0 010-1.42z" /></svg>
                    </div> */}
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-700">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      className="mt-2 p-2 pl-10 border rounded w-full"
                      placeholder="enter your password"
                    />
                    {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M3 8a1 1 0 011-1h2a1 1 0 110 2H5v7a1 1 0 01-2 0V8zM14 7a1 1 0 112 0v8a1 1 0 01-2 0V7z" /></svg>
                    </div> */}
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <a href="#" className="text-blue-600 text-sm">Forgot my password?</a>
                </div>
                <button className="w-full bg-orange-500 text-white py-2 rounded shadow-lg hover:bg-orange-600 transition duration-200">
                  Sign in
                </button>
              </form>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-6">Or sign in with</p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-gray-200 p-2 rounded-full">Gologolo</button>
                  <button className="bg-gray-200 p-2 rounded-full">Marasi</button>
                  <button className="bg-gray-200 p-2 rounded-full">Faceboy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login15;
  