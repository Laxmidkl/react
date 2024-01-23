import React from "react";

function Tips() {
  return (
    <div className=" m-auto w-36 h-12 border-2 border-green-600 rounded-md overflow-clip group cursor-pointer relative ">
      <div className="text-green-500 text-lg z-40 relative group-hover:text-white   text-center py-2 ">
        More Tips
      </div>

      <div className="h-0 w-full bg-green-700 group-hover:h-full transition-all duration-700  ease-in-out text-white absolute z-10 top-0"></div>
    </div>
  );
}

export default Tips;
