import React from "react";

import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function Need() {
  return (
    <div className="w-screen h-5/6  flex  relative top-24">
      <div className="w-2/4  relative ">
        <div className="text-green-800 font-bold text-5xl relative top-44 left-28 ">
          Need any help?{" "}
        </div>

        <div className="text-lg text-green-700 relative left-28 top-52">
          <div className="leading-8">
            The information is also part of the MF Rural, where you<br></br> can
            find news, quotes, technological information and<br></br> others, in
            addition.
          </div>
          <div className="flex relative top-6 gap-4 items-center">
            {" "}
            <BsFillTelephoneFill /> (10)892-293-2678
          </div>
          <div className="flex relative top-10 gap-4 items-center">
            {" "}
            <CiMail /> contact@agrica.com
          </div>
          <div className="flex relative top-16 gap-4 items-center">
            {" "}
            <CiLocationOn /> 768/A, Green lane 790, Max town New York
          </div>
        </div>
        <div className=" w-56 h-12 border-2 border-green-600 rounded-md overflow-clip group cursor-pointer relative left-28 top-80">
          <div className="text-green-500 text-lg relative z-40 group-hover:text-white  text-center py-2">
            Drop Your Message
          </div>

          <div className="h-0 w-full bg-green-700 group-hover:h-full transition-all duration-700  ease-in-out text-white absolute z-10 top-0"></div>
        </div>
      </div>

      <div className="w-2/4">
        <img
          src="https://images.unsplash.com/photo-1545830790-68595959c491?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-full w-full  object-cover"
        />
      </div>
    </div>
  );
}

export default Need;
