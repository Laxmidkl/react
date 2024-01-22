import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
function Why() {
  return (
    <div className='flex my-20  relative  '>

<div className='w-2/4 text-5xl text-green-900 font-bold left-11 relative '>Why you should <div>choose us</div>

  <div className='text-lg text-green-700 font-normal w-11/12 my-8 leading-7' >Technological information and others, in addition to information about companies in the sector, list of any and all companies related toto agribusiness.
    <ul className='list-square px-5 py-4'>
      <li>Technological information and others, in addition to information about companies.</li>
      <li>Technological information and others, in addition to information about companies.</li>
      <li>Technological information and others, in addition to information about companies.</li>
    </ul>

  </div>


  <div className='h-12 w-52 bg-green-600 relative bottom-2 rounded-xl overflow-clip group cursor-pointer '>
    <div className='flex relative items-center  left-7 top-3 gap-3 text-white font-bold text-base z-10 '>
      <BsFillTelephoneFill />
      (10)892-293-2678
    </div>
    <div className='h-full w-0 bg-green-900 group-hover:w-full transition-all duration-700 ease-in-out  absolute top-0'></div>
  </div>

</div>


<div className='w-2/4 '>
  <img src='https://cdn.pixabay.com/photo/2022/01/04/02/28/woman-6914029_1280.jpg' className='h-screen object-cover ' />

</div>

</div> 
  )
}

export default Why