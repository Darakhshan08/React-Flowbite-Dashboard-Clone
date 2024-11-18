import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Effect to set initial dark mode based on system preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };


  return (
    <section class="bg-gray-50 dark:bg-gray-900 shadow-lg">
  <div class="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Flowbite    
      </a>
  <div class="max-w-4xl flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800">
    <div class="w-full lg:w-1/2">
      <img class="object-cover w-full h-full" src="https://flowbite.com/application-ui/demo/images/authentication/login.jpg" alt="login image"/>
    </div>

    <div class="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
      <h2 class="text-3xl font-bold text-gray-900 mb-6 dark:text-white">Sign in to platform</h2>
      <form action="#">

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2 dark:text-white">Your email</label>
          <input type="email" name="email" id="email" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
        </div>
  
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2 dark:text-white">Your password</label>
          <input type="password" name="password" id="password" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required/>
        </div>

        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center">
            <input id="remember" name="remember" type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            <label for="remember" class="ml-2 block text-sm text-gray-900 dark:text-white">Remember me</label>
          </div>
          <div>
            <Link to="/Forgotpassword" class="text-sm text-blue-600 hover:underline">Forgot Password?</Link>
          </div>
        </div>
   
        <button type="submit" class="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">Login to your account</button>

        <div class="mt-6 text-sm text-gray-500">
          Not registered? 
          <Link to="/Signup" class="text-blue-600 hover:underline">Create account</Link>
        </div>
      </form>
    </div>
  </div>
  </div>
</section>

  )
}

export default Signin
