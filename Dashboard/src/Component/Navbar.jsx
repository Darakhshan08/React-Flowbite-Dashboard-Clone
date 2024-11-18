import React from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { HiBell } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { IoMoonSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

function Navbar() {
  return (

    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-300 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type='button' className="hover:border :border-blue-700 text-xl px-2">
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
        <button id="sidebarleft" data-drawer-toggle="logo-sidebar"  type='button' class="cursor-pointer text-2xl lg:hidden"><IoSearch /></button>
        <button id="dropdownNotificationButton" data-dropdown-toggle="dropdownNotification"  class="cursor-pointer text-2xl"><HiBell /></button>
                        <li className='cursor-pointer text-2xl'><RxDashboard /></li>
                        <li className='cursor-pointer text-2xl'><IoMoonSharp /></li>
                    </ul>


  <div id="dropdownNotification" class="z-20 hidden w-full max-w-md bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700" aria-labelledby="dropdownNotificationButton">
  <div class="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
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
  <a href="#" class="block py-2 text-md font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
    <div class="inline-flex items-center ">
      <svg class="w-6 h-6 me-2 text-black dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
        <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
      </svg>
        View all
    </div>
  </a>
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
                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
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
  
  )
}

export default Navbar
