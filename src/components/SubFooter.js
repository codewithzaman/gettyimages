import React from 'react'

const SubFooter = () => {
  return (
    <div className='w-full h-[100px] bg-[#6f43d6] font-xs'>
      <div className='w-[1600px] h-0.5 bg-white mx-6'>
        </div>
        <div className=' text-white mx-5 my-5 flex justify-around'>
        <p className=''>&#169;  2024 Getty Images. The Getty Images design is a trademark of Getty Images.</p>
        <ul className='flex gap-5 underline cursor-pointer'>
            <li>Website terms</li>
            <li>Editorial policySite map</li>
            <li>Privacy policy</li>
            <li>License information</li>
            <li>Site map</li>
        </ul>
        
        </div>

    </div>
  )
}

export default SubFooter
