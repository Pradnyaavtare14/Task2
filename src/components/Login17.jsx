// import React from 'react'

const Login17 = () => {
    return (
      
     
      <div className="min-h-screen flex">
        <div className="flex-1 text-white flex flex-col justify-center p-4 bg-gray-300">
          
        </div>
        <div className="flex-1 flex flex-col justify-center items-center p-8">
          <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-8 text-center">Sign in</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Your email"
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="password">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Your password"
                  required 
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <a href="#" className="text-sm text-red-600">Forgot my password?</a>
              </div>
              <button 
                type="submit" 
                className="w-full bg-red-500 text-white py-3 rounded-lg font-bold">
                Sign in
              </button>
            </form>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">Or sign in with</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex justify-around">
              <button 
                className="flex items-center justify-center border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100">
                Faceboy
              </button>
              <button 
                className="flex items-center justify-center border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100">
                Marasi
              </button>
            </div>
            <div className="text-center mt-12">
              <span className="text-sm">Dont have an account yet? <a href="#" className="text-red-600">Create an account</a></span>
            </div>
          
          </div>
        </div>
      </div>
    );
  }
  
  
  
  export default Login17