import React from "react";

function Field() {
  return (
    <div className="grid gap-10">
     <div className="text-green-800 font-bold text-5xl relative text-center ">
        Services we provide
      </div>
    <div className=" w-full h-96   flex gap-6 text-green-700">
      <div className="w-2/4 h-96 bg-green-50 flex ">
        <div className="w-2/4 ">
          <img
            src="https://media.gettyimages.com/id/a0125-000186/photo/tractor-plowing-soil.jpg?s=612x612&w=0&k=20&c=8CAVs93SBKkJOthSndUHnaOJ4YmIWH7VlsmeYPqupu4="
            className="h-full object-cover"
          />
        </div>

        <div className="w-2/4">
          <div className="relative left-5 my-10">01</div>
          <div className="relative px-4 leading-7 whitespace-break-spaces break-all ">
            {" "}
            Field Ready Technological information and others, in addition to
            information about companies in the sector, list of any and all
            companies related to agribusiness.
          </div>

          <div className="h-10 w-52 bg-green-600 relative left-5 bottom-2 rounded-xl  cursor-pointer  group  overflow-clip my-12">
            <div className="flex relative items-center  left-9 top-1 gap-3 text-white font-bold z-10 text-lg">
              Get The Service
            </div>
            <div className="h-full w-0 bg-green-900 group-hover:w-full transition-all duration-700 ease-in-out absolute top-0"></div>
          </div>
        </div>
      </div>

      <div className="w-2/4 h-96 bg-green-50 flex overflow-hidden">
        <div
          className="h-full w-2/4  bg-cover "
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1595251823086-930f6265cccc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhbnNwb3J0YXRpb24lMjBpJTIwJTIwZmllbGR8ZW58MHx8MHx8fDA%3D)`,
          }}
        ></div>

        <div className="w-2/4">
          <div className="relative left-5 my-10">02</div>
          <div className=" relative px-4  leading-7 whitespace-break-spaces break-all">
            {" "}
            Transportation Technological information and others, in addition to
            information about companies in the sector, list of any list ofz and
            all companies related to agribusiness.
          </div>

          <div className="h-10 w-52 bg-green-600 relative left-5 bottom-2 rounded-xl  cursor-pointer  group  overflow-clip my-12">
            <div className="flex relative items-center  left-9 top-1 gap-3 text-white font-bold z-10 text-lg">
              Get The Service
            </div>
            <div className="h-full w-0 bg-green-900 group-hover:w-full transition-all duration-700 ease-in-out absolute top-0"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Field;
