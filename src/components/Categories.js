import React from 'react'

const Categories = () => {
  return (
    <div className='flex justify-center '>
      <ul className='flex gap-10 ' >
        <li className='cursor-pointer'>Creative</li>
        <li className='cursor-pointer'>Editorial</li>
        <li className='cursor-pointer'>Video</li>
        <li className='cursor-pointer'>Music</li>
        <li className='cursor-pointer'>Collections</li>
      </ul>
    </div>
  )
}

export default Categories
