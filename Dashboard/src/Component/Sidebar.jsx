import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiBell } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { RiMenu2Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

const Sidebar = ()=> {
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
  <>
  
  <nav className={`fixed top-0 z-50 w-full bg-white border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-white `}>
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start rtl:justify-end">
      
         
  <button   data-drawer-target="logo-sidebar" 
      data-drawer-toggle="logo-sidebar" 
      aria-controls="logo-sidebar"  type="button" className="hover:border border-blue-700 text-xl px-2">
          <RiMenu2Line />
        </button>
  
            <a href="https://flowbite.com" class="flex ms-2 md:me-24">
              <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
              <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <div class="flex md:order-2">
            
      <div class="relative hidden lg:block">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span class="sr-only">Search icon</span>
        </div>
        <input type="text" id="search-navbar" class="block w-96 h-11 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
      </div>
      </div>
          </div>
        
          <div class="flex items-center">
          <ul className='flex px-5 gap-5 max-[430px]:ml-12'>
          <button id="Sidebar" data-drawer-toggle="logo-sidebar"  type='button' class="cursor-pointer text-2xl lg:hidden"><IoSearch /></button>
          <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification"  class="cursor-pointer text-2xl"><HiBell /></button>
                          <button id="drawerSwiperButton" data-dropdown-toggle="drawer-swipe" className='cursor-pointer text-2xl'><RxDashboard /></button>
                          <button id="theme-toggle" type="button" onClick={toggleDarkMode}>
          {/* Dark Mode Icon */}
          <svg
            id="theme-toggle-dark-icon"
            className={`w-6 h-6 ${darkMode ? 'hidden' : 'block'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
  
          {/* Light Mode Icon */}
          <svg id="theme-toggle-light-icon" className={`w-6 h-6 ${darkMode ? 'block' : 'hidden'}`} fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
                      </ul>
  
                      
    <div id="dropdownNotification" class="z-20 hidden w-full max-w-md bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" aria-labelledby="dropdownNotificationButton">
    <div class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-700 dark:text-white">
        Notifications
    </div>
    <div class="divide-y divide-gray-100 dark:divide-gray-700">
      <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
        <div class="flex-shrink-0">
          <img class="rounded-full w-12 h-12" src="https://flowbite.com/application-ui/demo/images/users/bonnie-green.png" alt="Jese image"/>
          <div class="absolute flex items-center justify-center w-6 h-6 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
            <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
              <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z"/>
              <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z"/>
            </svg>
          </div>
        </div>
        <div class="w-full ps-3">
            <div class="text-gray-500 text-md mb-1.5 dark:text-gray-400">New message from <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>: "Hey, what's up? All set for the presentation?"</div>
            <div class="text-sm text-blue-600 dark:text-blue-500">a few moments ago</div>
        </div>
      </a>
      <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
        <div class="flex-shrink-0">
          <img class="rounded-full w-12 h-12" src="https://flowbite.com/application-ui/demo/images/users/jese-leos.png" alt="Joseph image"/>
          <div class="absolute flex items-center justify-center w-6 h-6 ms-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
            <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z"/>
            </svg>
          </div>
        </div>
        <div class="w-full ps-3">
            <div class="text-gray-500 text-md mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span> and <span class="font-medium text-gray-900 dark:text-white">5 others</span> started following you.</div>
            <div class="text-sm text-blue-600 dark:text-blue-500">10 minutes ago</div>
        </div>
      </a>
      <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
        <div class="flex-shrink-0">
          <img class="rounded-full w-12 h-12" src="https://flowbite.com/application-ui/demo/images/users/joseph-mcfall.png" alt="Bonnie image"/>
          <div class="absolute flex items-center justify-center w-6 h-6 ms-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
            <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
            </svg>
          </div>
        </div>
        <div class="w-full ps-3">
            <div class="text-gray-500 text-md mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span class="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.</div>
            <div class="text-sm text-blue-600 dark:text-blue-500">44 minutes ago</div>
        </div>
      </a>
      <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
        <div class="flex-shrink-0">
          <img class="rounded-full w-12 h-12" src="https://flowbite.com/application-ui/demo/images/users/leslie-livingston.png" alt="Leslie image"/>
          <div class="absolute flex items-center justify-center w-6 h-6 ms-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-800">
            <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
            </svg>
          </div>
        </div>
        <div class="w-full ps-3">
            <div class="text-gray-500 text-md mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> mentioned you in a comment: <span class="font-medium text-blue-500" href="#">@bonnie.green</span> what do you say?</div>
            <div class="text-sm text-blue-600 dark:text-blue-500">1 hour ago</div>
        </div>
      </a>
      <a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700">
        <div class="flex-shrink-0">
          <img class="rounded-full w-12 h-12" src="https://flowbite.com/application-ui/demo/images/users/robert-brown.png" alt="Robert image"/>
          <div class="absolute flex items-center justify-center w-6 h-6 ms-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-800">
            <svg class="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
              <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z"/>
            </svg>
          </div>
        </div>
        <div class="w-full ps-3">
            <div class="text-gray-500 text-md mb-1.5 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend.</div>
            <div class="text-sm text-blue-600 dark:text-blue-500">3 hours ago</div>
        </div>
      </a>
    </div>
    <a href="#" class="block py-2 text-md font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-700 dark:text-white">
      <div class="inline-flex items-center ">
        <svg class="w-6 h-6 me-2 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
          <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
        </svg>
          View all
      </div>
    </a>
  </div>
  <div id="drawer-swipe" class="z-20 hidden w-96 max-w-md bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" aria-labelledby="drawerSwiperButton">
    <div class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-700 dark:text-white">
      Apps
    </div>
    <div class="divide-y divide-gray-100 dark:divide-gray-700">
    <div class="grid grid-cols-3 gap-4 p-4 lg:grid-cols-3">
        <div class="p-4 rounded-lg cursor-pointer  text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 ">
           <div class="flex justify-center items-center p-2 mx-auto mb-2 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
           <svg class="YajDCE_nRj_FDIevNpsd Z3N7I2IDDsoXK6xJ1cSW RWlOLn85L9w5_1l9GIaX bLH_DeiQ7Cp4iBqeW3kq PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd">
            </path>
            </svg>
           </div>
           <div class="font-medium text-center text-gray-500 dark:text-white">Sales</div>
        </div>
        <div class="p-4 rounded-lg cursor-pointer text-gray-400  hover:bg-gray-100 dark:hover:bg-gray-600">
           <div class="flex justify-center items-center p-2 mx-auto mb-2 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
           <svg class="YajDCE_nRj_FDIevNpsd Z3N7I2IDDsoXK6xJ1cSW RWlOLn85L9w5_1l9GIaX bLH_DeiQ7Cp4iBqeW3kq PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
            </path>
            </svg>
           </div>
           <div class="font-medium text-center text-gray-500  dark:text-white">Users</div>
        </div>
        <div class="p-4 rounded-lg cursor-pointer text-gray-400  hover:bg-gray-100 dark:hover:bg-gray-600 lg:block">
           <div class="flex justify-center items-center p-2 mx-auto mb-2 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
           <svg class="YajDCE_nRj_FDIevNpsd Z3N7I2IDDsoXK6xJ1cSW RWlOLn85L9w5_1l9GIaX bLH_DeiQ7Cp4iBqeW3kq PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd">
            </path>
            </svg>
           </div>
           <div class="font-medium text-center text-gray-500  dark:text-white">Inbox</div>
        </div>
        <div class="p-4 rounded-lg cursor-pointer text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600">
           <div class="flex justify-center items-center p-2 mx-auto mb-2 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
           <svg class="YajDCE_nRj_FDIevNpsd Z3N7I2IDDsoXK6xJ1cSW RWlOLn85L9w5_1l9GIaX bLH_DeiQ7Cp4iBqeW3kq PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd">
            </path>
            </svg> 
           </div>
           <div class="font-medium text-center text-gray-500  dark:text-white">Profile</div>
        </div>
        <div class="p-4 rounded-lg cursor-pointer text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600  lg:block">
           <div class="flex justify-center items-center p-2 mx-auto mb-2 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
           <svg class="YajDCE_nRj_FDIevNpsd Z3N7I2IDDsoXK6xJ1cSW RWlOLn85L9w5_1l9GIaX bLH_DeiQ7Cp4iBqeW3kq PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd">
            </path>
            </svg>
           </div>
           <div class="font-medium text-center text-gray-500 dark:text-white">Settings</div>
        </div>
        <div class="p-4 rounded-lg cursor-pointer text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 lg:block">
           <div class="flex justify-center items-center p-2 mx-auto mb-2 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
           <svg class="YajDCE_nRj_FDIevNpsd Z3N7I2IDDsoXK6xJ1cSW RWlOLn85L9w5_1l9GIaX bLH_DeiQ7Cp4iBqeW3kq PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path>
           <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd">
            </path>
            </svg>
           </div>
           <div class="font-medium text-center text-gray-500 dark:text-white">Products</div>
        </div>
        <div class="p-4 rounded-lg cursor-pointer text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 lg:block">
           <div class="flex justify-center items-center p-2 mx-auto mb-2 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
           <svg class="YajDCE_nRj_FDIevNpsd Z3N7I2IDDsoXK6xJ1cSW RWlOLn85L9w5_1l9GIaX bLH_DeiQ7Cp4iBqeW3kq PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
           <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd">
            </path>
            </svg>
           </div>
           <div class="font-medium text-center text-gray-400 dark:text-white">Pricing</div>
        </div>
        <div class="p-4 rounded-lg cursor-pointer text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 lg:block">
           <div class="flex justify-center items-center p-2 mx-auto mb-2 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
           <svg class="YajDCE_nRj_FDIevNpsd Z3N7I2IDDsoXK6xJ1cSW RWlOLn85L9w5_1l9GIaX bLH_DeiQ7Cp4iBqeW3kq PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clip-rule="evenodd">
            </path>
            </svg>
           </div>
           <div class="font-medium text-center text-gray-500  dark:text-white">Billing</div>
        </div>
        <div class="p-4 rounded-lg cursor-pointer text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600 lg:block">
           <div class="flex justify-center items-center p-2 mx-auto mb-2 rounded-full w-[48px] h-[48px] max-w-[48px] max-h-[48px]">
           <svg class="YajDCE_nRj_FDIevNpsd Z3N7I2IDDsoXK6xJ1cSW RWlOLn85L9w5_1l9GIaX bLH_DeiQ7Cp4iBqeW3kq PeR2JZ9BZHYIH8Ea3F36 XIIs8ZOri3wm8Wnj9N_y" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
            </path>
            </svg>
           </div>
           <div class="font-medium text-center text-gray-500  dark:text-white">Logout</div>
        </div>
  
        </div>   
    </div>
  </div>
  
              <div class="flex items-center ">
                <div>
                  <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 max-[430px]:hidden" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                  </button>
                </div>
                <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                  <div class="px-4 py-3" role="none">
                    <p class="text-sm text-gray-900 dark:text-white" role="none">
                      Neil Sims
                    </p>
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul class="py-1" role="none">
                    <li>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                    </li>
                    <li>
                      <Link to="/Setting" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</Link>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    </nav>
  
    <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
     <div class="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
        <div class="flex md:order-2 mt-2">
            <div class="relative lg:block lg:hidden">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input type="text" id="search-navbar" class="block w-56 h-11 p-2  ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
            </div>
            </div>
           <li>
              <Link to="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 <svg class="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                 <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                 <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                 </svg>
                 <span class="ms-3">Dashboard</span>
              </Link>
           </li>
           <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                 <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                 </svg>
                 <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
  
              </a>
           </li>
           <li>
              <Link to="/Inbox" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                 <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                 <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                 </svg>
                 <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                 <span className={`inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300`}>3</span>
              </Link>
           </li>
           <li>
           <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-ecommerce" data-collapse-toggle="dropdown-ecommerce">
                    <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                    <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path>
                    </svg>
                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                    <svg class={`w-3 h-3`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
              </button>
              <ul id="dropdown-ecommerce" class="hidden py-2 space-y-2">
                    <li>
                       <Link to="/Product" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</Link>
                    </li>
                    <li>
                       <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a>
                    </li>
                    <li>
                       <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a>
                    </li>
              </ul>
           </li>
           <li>
           <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-users" data-collapse-toggle="dropdown-users">
              <svg class="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                 </svg>
                    <span className={`flex-1 ms-3 text-left rtl:text-right whitespace-nowrap`}>Users</span>
                    <svg class={`w-3 h-3`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                       <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
              </button>
              <ul id="dropdown-users" class="hidden py-2 space-y-2">
                    <li>
                       <Link to="/Userlist" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">User List</Link>
                    </li>
                    <li>
                       <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Profile</a>
                    </li>
                    <li>
                       <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Feed</a>
                    </li>
                    <li>
                       <Link to="/Setting" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Setting</Link>
                    </li>
              </ul>
           </li>
           <li>
     <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
        <svg class="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
        <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd" class=""></path>
        </svg>
        <span className={`flex-1 ms-3 text-left rtl:text-right whitespace-nowrap`}>Pages</span>
        <svg class={`w-3 h-3`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
     </button>
     <ul id="dropdown-example" class="hidden py-2 space-y-2">
        <li>
           <Link to="/Pricing" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Pricing</Link>
        </li>
        <li>
           <Link to="/Maintenance" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Maintenance</Link>
        </li>
        <li>
           <Link to="/Pagenotfound" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">404 Not Found</Link>
        </li>
        <li>
           <Link to="/Servererror" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">500 Server Error</Link>
        </li>
     </ul>
  </li>
  <li>
     <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-auth" data-collapse-toggle="dropdown-auth">
        <svg class="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
        </svg>
        <span className={`flex-1 ms-3 text-left rtl:text-right whitespace-nowrap`}>Authentication</span>
        <svg class={`w-3 h-3`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
     </button>
     <ul id="dropdown-auth" class="hidden py-2 space-y-2">
        <li>
           <Link to="/Signin" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign in</Link>
        </li>
        <li>
           <Link to="/Signup" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign up</Link>
        </li>
        <li>
           <Link to="/Forgotpassword" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Forgot password</Link>
        </li>
        <li>
           <Link to="/Resetpassword" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Reset password</Link>
        </li>
        <li>
           <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Profile lock</a>
        </li>
     </ul>
  </li>
           
        </ul>
        <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-300 dark:border-gray-700">
           <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                 <svg class="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                 <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                 <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path>
                 </svg>
                 <span className={`ms-3`}>Docs</span>
              </a>
           </li>
           <li>
              <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                 <svg class="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                 <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                 </svg>
                 <span className={`ms-3 `}>Components</span>
              </a>
           </li>
           <li>
              <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                 <svg class="flex-shrink-0 w-7 h-7 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 21">
                 <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path>
                 </svg>
                 <span className={`ms-3`}>Help</span>
              </a> 
           </li>
        </ul>
     </div>
</aside>
  </>
  )
  
}

export default Sidebar

