import React from 'react'
import { FaArrowRight } from "react-icons/fa";


function Banner() {
    return (
        <div className="h-screen w-full bg-cover"

            style={{
                backgroundImage: `url(https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-2165688.jpg&fm=jpg)`,
            }}>

            <div className='text-white font-bold text-7xl relative text-center top-48'>Agricultural solution</div>
            <div className='text-white font-bold text-xl relative text-center top-60 '>High-performing products that keep large turf areas beautiful and healthy-while <br />saving your time, water and energy </div>
            <div className=' w-56 h-14 rounded-2xl border-2 cursor-pointer relative  m-auto top-72 '>
                <div className='text-white  font-medium flex items-center gap-5 relative top-3 left-4  '>Explore Our Service  <FaArrowRight /></div>
            </div>
        </div>

    )
}

export default Banner