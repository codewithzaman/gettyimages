import React from 'react';
import { HiShoppingCart } from "react-icons/hi2";

const SubNav = () => {
  return (
    <div className='flex justify-between pt-3'>
      <div className='mx-4 '>
        <ul className='flex px-4 gap-5'>
            <li className=' hover:text-white hover:bg-black hover:rounded-full hover:border-2 p-2 mx-4 cursor-pointer'>Creative</li>
            <li className=' hover:text-white hover:bg-black hover:rounded-full hover:border-2 p-2 mx-4 cursor-pointer'>Editorial</li>
            <li className=' hover:text-white hover:bg-black hover:rounded-full hover:border-2 p-2 mx-4 cursor-pointer'>Video</li>
            <li className=' hover:text-white hover:bg-black hover:rounded-full hover:border-2 p-2 mx-4 cursor-pointer'>Collections</li>
            <li className=' hover:text-white hover:bg-black hover:rounded-full hover:border-2 p-2 mx-4 cursor-pointer'>Ai Generator</li>
            <li className=' hover:text-white hover:bg-black hover:rounded-full hover:border-2 p-2 mx-4 cursor-pointer'>insights</li>
        </ul>
      </div>
      <div >
        <ul className='flex px-4 gap-5 justify-center mr-8'>
            <li className=' hover:text-white hover:bg-black hover:rounded-full hover:border-2 p-2 mx-4 cursor-pointer'>Enterprise</li>
            <li className=' hover:text-white hover:bg-black hover:rounded-full hover:border-2 p-2 mx-4 cursor-pointer'>Pricing</li>
            <HiShoppingCart className='text-3xl hover:text-blue-600 cursor-pointer' />

        </ul>
      </div>
    </div>
  )
}

export default SubNav
