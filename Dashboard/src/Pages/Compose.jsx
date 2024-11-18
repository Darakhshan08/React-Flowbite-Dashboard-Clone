import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Component/Sidebar'
import { PiTrashFill } from "react-icons/pi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { HiPrinter } from "react-icons/hi";

function Compose() {
  return (
    <>
    
    <Sidebar />
    <div className='dark:bg-gray-900 h-full'>
    <div class="p-4 sm:ml-64 ">
    <div class="p-4 mt-14 ">
      

    <div class="flex justify-between items-center border-b  ">

    <div class="flex items-center mb-5 space-x-4">
    <Link to="/Inbox" className="flex items-center">
      <FaArrowLeftLong className="mr-3 font-bold w-6 h-5 dark:text-white" />
    </Link>
        <span class="border-l h-7"></span> 
        <span class="cursor-pointer text-2xl text-gray-500">
            New Message
        </span>
    </div>


    <div class="flex items-center mb-5 space-x-4">
        <PiTrashFill className='cursor-pointer text-2xl text-gray-500' />
        <span class="border-l h-7"></span>
        <IoIosArrowBack className='cursor-pointer text-2xl dark:text-white' />
        <IoIosArrowForward className='cursor-pointer text-2xl dark:text-white' />
    </div>
</div>


          <div class="col-span-6 sm:col-span-3 mt-12 ">
    
               <input type="text" name="first-name" id="first-name" class=" shadow-sm bg-gray-50 border border-gray-300 font-bace text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="To" required=""/>
          </div>
          
          <div class="col-span-6 sm:col-span-3 mt-8">
    
               <input type="text" name="subject" id="subject" class="shadow-sm bg-gray-50 border border-gray-300 font-bace text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject" required=""/>
          </div>

           <div class="col-span-6 sm:col-span-3 mt-8 mb-8">
    
               <textarea type="text" name="message" id="message" class="shadow-sm bg-gray-50 border border-gray-300 font-bace text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full h-[530px] p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write text here ..." required=""/>
          </div>


          <div class="flex items-center mb-5 space-x-4">
          <button class="flex items-center justify-center h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-4 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Send  <IoMdSend className='ml-3 h-4 w-4 ' />
    </button>
    <span class="border-l h-7"></span>
        <MdEmojiEmotions className='coursor-pointer text-2xl dark:text-white' />
        <RiGalleryLine  className='coursor-pointer text-2xl dark:text-white'/>
        <HiPrinter  className='coursor-pointer text-2xl dark:text-white'/>
    </div>

    </div>
    </div>
    </div>
    </>
  )
}

export default Compose
