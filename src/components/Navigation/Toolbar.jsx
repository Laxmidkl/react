import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiGreenhouse } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Toolbar() {
  
  return (
    <div className='flex gap-16 h-20 relative justify-end px-10 top-7 cursor-pointer'>
      <div className='flex items-center gap-4 text-3xl font-bold text-green-900 cursor-pointer relative  bottom-7 right-32'><GiGreenhouse className='w-16 h-16' />Agrica</div>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/service'}>Service</Link>
      <Link to={'/blog'}>Blog</Link>
      <Link to={'/contact'}>Contact</Link>

      <div className='h-12 w-52 bg-green-600 relative bottom-2 rounded-xl overflow-clip group cursor-pointer '>
        <div className='flex relative items-center  left-7 top-3 gap-3 text-white font-bold z-10 '>
          <BsFillTelephoneFill />
          (10)892-293-2678
        </div>
        <div className='h-full w-0 bg-green-900 group-hover:w-full transition-all duration-700 ease-in-out  absolute top-0'></div>
      </div>
    </div>

  )
}

export default Toolbar