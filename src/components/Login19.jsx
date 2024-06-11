import {useState} from 'react'

const Login19 = () => {
  

   
      const [showPassword, setShowPassword] = useState(false);
    
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
      return (
        <div className="min-h-screen flex">
          {/* Left Side with Background */}
          <div className="hidden md:block w-1/2 bg-blue-900 text-white relative overflow-hidden">
            <div className="absolute w-full h-full flex items-center justify-center p-10">
              <div className="text-center space-y-4">
                <p className="text-sm mt-96">style according to your style and get interesting tips about lifestyle and dressing</p>
                <p className="text-sm">that is modern and contemporary</p>
              </div>
            </div>
            <div className="absolute inset-0">
              {/* Circles */}
              <div className="absolute bg-gray-300 rounded-full h-32 w-32 top-20 left-20 opacity-30"></div>
              <div className="absolute bg-gray-300 rounded-full h-48 w-48 top-40 right-20 opacity-20"></div>
              <div className="absolute bg-gray-300 rounded-full h-24 w-24 bottom-20 left-40 opacity-40"></div>
              <div className="absolute bg-gray-300 rounded-full h-40 w-40 bottom-10 right-40 opacity-20"></div>
            </div>
          </div>
          
          {/* Right Side Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-8">
            <div className="max-w-md w-full">
              <h2 className="text-3xl font-bold mb-6 text-center">Sign in Now !</h2>
              <button className="w-full mb-4 border border-gray-300 py-2 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100">
                <input type="radio" className="mr-2" />
                <span>Sign in with Google</span>
              </button>
              <div className="text-center my-4 text-gray-500">Or</div>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1" htmlFor="email">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    value="Benjaminrobert77@email.com"
                    readOnly
                  />
                </div>
                <div className="mb-4 relative">
                  <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="password" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    value="*"
                    readOnly
                  />
                  <button 
                    type="button" 
                    onClick={togglePasswordVisibility} 
                    className="absolute inset-y-0 right-0 pr-4 flex items-center">
                    <svg 
                      className="h-5 w-5 text-gray-400" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d={showPassword ? 
                          "M13.875 18.825A10.12 10.12 0 0112 19c-5.523 0-10-4.477-10-10S6.477 1 12 1c2.276 0 4.384.837 6.01 2.225M9.04 7.56l1.72 1.72M3 3l18 18" : 
                          "M15 12a3 3 0 11-6 0 3 3 0 016 0zm2 0c0-2.761-2.239-5-5-5S7 9.239 7 12s2.239 5 5 5 5-2.239 5-5zm-2.293 4.707L21 21l-1.293-1.293L4.707 3 3 4.707 6.586 8.293A10.952 10.952 0 002 12a11 11 0 0018.707 6.293z"
                        }>
                      </path>
                    </svg>
                  </button>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <a href="#" className="text-sm text-gray-500">Forgot my password?</a>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
                  Sign in
                </button>
              </form>
              <div className="text-center mt-6">
                <span className="text-sm text-gray-500">Dont have an account yet? <a href="#" className="text-blue-600">Create an account</a></span>
              </div>
            </div>
          </div>
        </div>
      );
    }


export default Login19