import React from 'react'

const Navbar = () => {
  return (
    <div className='mx-6 py-2 flex justify-between '>
        <h1 className='text-4xl'>
        <span className='text-4xl font-bold'>getty</span>
        images
        </h1>
      <ul className='flex justify-center mx-4 '>
        <li className='text-black mx-4 p-2 m-2 rounded hover:bg-[#2c3395] hover:text-white cursor-pointer'>Boards</li>
        <li className='text-black border-2 border-black rounded p-2 m-2  hover:bg-black hover:text-white cursor-pointer'>Sign in</li>
      </ul>
    </div>
  )
}

export default Navbar
