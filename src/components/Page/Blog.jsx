import React, { useEffect, useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

function Blog() {
  const [show, setshow] = useState(0);

  
  const goToval=(i)=>{
    setshow(i);
  }  
  
  const lle = [
    {
      image:
        "https://images.unsplash.com/photo-1595251823086-930f6265cccc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhbnNwb3J0YXRpb24lMjBpJTIwJTIwZmllbGR8ZW58MHx8MHx8fDA%3D",
    },

    {
      image:
        " https://media.gettyimages.com/id/a0125-000186/photo/tractor-plowing-soil.jpg?s=612x612&w=0&k=20&c=8CAVs93SBKkJOthSndUHnaOJ4YmIWH7VlsmeYPqupu4=",
    },

    {
      image:
        "https://images.unsplash.com/photo-1651592278720-fd9479be2a9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      image:
        "https://images.unsplash.com/photo-1589876568181-a1508b8ef473?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      image:
        "https://images.unsplash.com/photo-1624720114708-0cbd6ee41f4e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      image:
        "https://images.unsplash.com/photo-1563201515-adbe35c669c5?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  


  const prev=()=>{
    show===0?setshow(lle.length-1):setshow(show-1)
  }

  useEffect(()=>{

  
    let interval=setTimeout(()=>{
      
      prev()
    },3000 );
    return()=>{
      clearTimeout(interval)
    }
  },[show])


  
  return (
    <div>
      <button
        onClick={() => {
          prev()
        }}
        className="text-gray-500 h-16 w-16 rounded-full  relative top-80  " ><IoIosArrowBack className="text-5xl " />{" "}</button>

       <div className="w-screen h-100 relative overflow-clip">
 

      {lle.map((val, i) => {
        // if (i === show) {
          return (
            <img src={val.image} className={`h-100 w-full object-contain absolute transition-all ease-in-out duration-500 delay-150 ${i===show?'translate-x-0':'translate-x-full'} ` }/>
          );
        // }
      })}

</div>




      <div className="flex justify-end ">
        <button
          onClick={() => {
            show===lle.length-1?setshow(0):setshow(show + 1);
          }}
          className="text-gray-500   h-16 w-16 rounded-full relative bottom-80    "
        >
          <IoIosArrowForward className="text-5xl  " />{" "}
        </button>
      </div>



<div className=" flex top-4 justify-center py-2">
{
  lle.map((val, i)=>(
    <div key={i} onClick={()=>setshow(i)} className="text-2xl cursor-pointer"><GoDotFill className={`${i===show?'text-red-600':'text-gray-600'}`} /></div>
  )
  )
}
</div>


    </div>
  );
}

export default Blog;
