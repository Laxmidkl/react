import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";

function Toolbar() {
  return (
    <div>
        
      <div className='flex gap-16 h-20 relative left-96 top-7 cursor-pointer'>
        <div>Home</div>
        <div>About</div>
        <div>service</div>
        <div>Blog</div>
        <div>contact</div>

        <div className='h-12 w-52 bg-green-600 relative bottom-2 rounded-xl overflow-clip group cursor-pointer '>
          <div className='flex relative items-center  left-7 top-3 gap-3 text-white font-bold z-10 '>
            <BsFillTelephoneFill />
            (10)892-293-2678
          </div>
          <div className='h-full w-0 bg-green-900 group-hover:w-full transition-all duration-700 ease-in-out  absolute top-0'></div>
        </div>
      </div>

    </div>
  )
}

export default Toolbar