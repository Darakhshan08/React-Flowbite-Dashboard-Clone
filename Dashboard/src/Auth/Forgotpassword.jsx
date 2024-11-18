import React, {useState,useEffect} from 'react'

function Forgotpassword() {
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
    <section class="bg-gray-50 dark:bg-gray-900 shadow-lg h-screen">
   <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a href=""class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-4 h-11" alt="FlowBite Logo"/>
        <span>Flowbite</span>  
    </a>

    <div class="max-w-4xl h-2/4 p-4 flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden dark:bg-gray-800">
        <div class="w-full p-6 sm:p-8">
            <h2 class="mb-3 text-3xl font-bold text-gray-900 dark:text-white">
                Forgot your password?
            </h2>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Don't fret! Just type in your email and we will send you a code to reset your password!
            </p>
            <form class="mt-8 space-y-6" action="#">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                </div>
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required/>
                    </div>
                    <div class="ml-3 text-sm">
                        <label for="remember" class="font-medium text-gray-900 dark:text-white">I accept the <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Terms and Conditions</a></label>
                    </div>
                </div>
                <button type="submit" class=" bg-blue-600 w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:bg-blue-700">Reset password</button>
            </form>
        </div>
    </div>
</div>
</section>
  )
}

export default Forgotpassword
