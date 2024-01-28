import React from "react";

import { BsFillTelephoneFill } from "react-icons/bs";

function Agricultural() {
  return (
    <div className=" w-full h-4/6  mt-10 flex">
      <div className="max-w-screen-sm w-5/12  border-green-800 border-2 relative  left-20 ">
        <div
          className="h-full max-w-2xl  bg-cover relative bottom-9 right-9 "
          style={{
            backgroundImage: `url(https://media.istockphoto.com/id/1412701970/photo/farmer-ploughing-his-fields-to-the-delight-of-seagulls.jpg?s=612x612&w=0&k=20&c=iOF_3ZI6UCoY73gxXSuzDMBUJ3k3Os96HVTmnTvuAnc=)`,
          }}
        >
          {" "}
        </div>
      </div>

      <div className="h-5/6 max-w-md   relative left-40 text-green-800 text-6xl font-semibold ">
        {" "}
        20+ years agricultural cooperative
        <div className="text-xl my-8">
          The automated process starts as soon as your clothes go into the
          machine. The outcome is gleaming clothes!
        </div>
        <div className="text-xl">
          The automated process starts as soon as your clothes go into the
          machine. The outcome is gleaming clothes!
        </div>
        <div className="h-12 w-52 bg-green-600 relative bottom-2 rounded-xl  cursor-pointer  group  overflow-clip my-12">
          <div className="flex relative items-center  left-4 top-3 gap-3 text-white font-bold z-10 text-xl">
            <BsFillTelephoneFill />
            More About Us
          </div>
          <div className="h-full w-0 bg-green-900 group-hover:w-full transition-all duration-700 ease-in-out absolute top-0"></div>
        </div>
      </div>
    </div>
  );
}

export default Agricultural;
