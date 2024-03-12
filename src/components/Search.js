import React from 'react';
import { FaSearch } from "react-icons/fa";
import { MdUploadFile } from "react-icons/md";

const Search = () => {
  return (
    <div className='w-full h-[300px] bg-gray-200 flex flex-col justify-center items-center mt-5'>
      <h1 className='text-4xl font-semibold '>Move The World</h1>
      <div className='mt-4 w-[800px] h-[70px] px-5 border border-black flex items-center gap-5 bg-white sticky'>
      <FaSearch  className=''/>
      <input type="text"  placeholder='Search the worlds best creative photos and images' className='w-[400px] h-[40px] border-0 focus:border-0 cursor-pointer'/>
      <div className='w-0.5 h-10 bg-gray-500'></div>
      <h1>Creative Images</h1>
      <div className='w-0.5 h-10 bg-gray-500'></div>
      <div className='flex flex-col justify-center items-center'>
      <MdUploadFile /> 
      <h1 className=' text-xs '>Search by image or video</h1>
      </div>
      </div>
      
    </div>
  )
}

export default Search
