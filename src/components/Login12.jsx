// import React from 'react'

const Login12 = () => {
  return (
  
    // <div>
    //     <div className="min-h-screen flex">
      
    //   <div className="flex-1 flex flex-col justify-center items-center p-8">
    //     <div className="w-full max-w-md">
    //       <h2 className="text-sm text-gray-600 mb-5">Welcome Back,</h2>
    //       <h3 className="text-4xl font-bold mb-5">Sign in to Travelic.</h3>
    //       <h2 className="text-sm text-gray-600 mb-16">Create one new account ?</h2>
          
    //       <form className="space-y-6">
    //         <div>
    //           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
    //             Email Address
    //           </label>
    //           <input
    //             type="email"
    //             id="email"
    //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //             placeholder="Benjaminrobert77@email.com"
    //           />
    //         </div>
    //         <div>
    //           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
    //             Password
    //           </label>
    //           <input
    //             type="password"
    //             id="password"
    //             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //             placeholder="•••••••••••••••••"
    //           />
    //           <div className="text-right mt-2">
    //             <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
    //               Forgot my password?
    //             </a>
    //           </div>
    //         </div>
    //         <div>
    //           <button
    //             type="submit"
    //             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    //           >
    //             Sign in
    //           </button>
    //         </div>
    //       </form>
    //       <div className="mt-6">
    //         <p className="text-center text-sm text-gray-600">
    //           Or sign in with
    //         </p>
    //         <div className="mt-3 flex justify-center space-x-4">
    //           <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
    //             Faceboy
    //           </button>
    //           <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
    //             Marasi
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex-1 text-white flex flex-col justify-center p-4" style={{backgroundColor:"#626262"}}>
       
    //   </div>
    // </div>
    // </div>
    <div className="min-h-screen flex">
      <div className="flex-1  flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-5">Explore In The World</h1>
          <p className="text-gray-600 mb-8 text-sm ">
            Lets vacation now with tickets from us at affordable prices and also reliable friendly and best service also prioritizes customer comfort and safety with strict health protocols.
          </p>
          <div className="flex justify-center mb-4">
            <button className="w-full mr-2 mb-6 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Sign in with Faceboy
            </button>
            <button className="w-full ml-2 mb-6 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Sign in with Marasi
            </button>
          </div>
          <div className="flex items-center mb-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">Or sign in with</span>
            <div className="flex-grow border-t border-gray-300 "></div>
          </div>
          <form className="space-y-6 mt-8">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="email"
                  id="email"
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
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
                className="w-full flex justify-center py-2 mb-8 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2" style={{backgroundColor:"#0e918c"}}
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              New here? <a href="#" className="text-green-600 hover:text-green-500">Create an account</a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 text-white flex flex-col justify-center p-4" style={{backgroundColor:"#626262"}}>
        
      </div>
    </div>
  );
}


export default Login12;