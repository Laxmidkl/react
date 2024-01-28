import React from "react";
import Tips from "./Tips";

function Lawn() {

  const data=[
    {
      image:"https://images.unsplash.com/photo-1651592278720-fd9479be2a9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration:"   20+ years agricultural cooperative",
      description:`  The information is also part of the MF Rural, where you can find
      news, quotes technological information and others, in
      addition to information about companies in the sector, list
      of any and all companies related to agribusiness, just access the
      Rural List section `
  
  },
  {
    image:"https://images.unsplash.com/photo-1545303234-0063837ea931?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration:" Lawn Protection Equipments",
    description:`  The information is also part of the MF Rural, where you can find
    news, quotestechnological information and others, in
    addition to information about companies in the sector, list
    of any and all companies related to agribusiness, just access the
    Rural List section `,

}

  ]
  return (
    <div className="grid gap-10">
     <div className="text-green-800 font-bold text-5xl relative text-center">
        Tips from experts
      </div>
    <div className=" w-full grid gap-10">
      {
        data.map((Val,i)=>{
          return(
            <div className="bg-green-50 w-11/12 h-80 overflow-clip   ml-auto relative gap-8  grid grid-cols-6">
            <div className="relative col-span-2 h-full ">
              <img
              src={Val.image}
                // src="https://images.unsplash.com/photo-1651592278720-fd9479be2a9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-full w-full  object-cover"
              />
            </div>
    
            <div className="relative col-span-4 flex flex-col gap-5 py-6  ">
              <div className="text-green-800 text-4xl font-bold hover:text-green-500 cursor-pointer">
                {Val.duration}
              </div>

              <div className="text-lg w-11/12 text-green-700">
               {Val.description}
              </div>

              <div className="text-green-500 text-lg   underline decoration-2  cursor-pointer ">
                Read More
              </div>
            </div>
          </div>
          )
        })
      }


    </div>

    <Tips />

    </div>
  );
}

export default Lawn;
