import React from "react";
import { GiGreenhouse } from "react-icons/gi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
function footer() {
  const foot = [
    {
      tile: "quick links",
      sub: [
        { name: "Design and Creative" },
        { name: "Telecommunication" },
        { name: "Restaurant " },
        { name: "Programing " },
        { name: "Architecture" },
      ],
    },
    {
      tile: "company",
      sub: [
        { name: "Design and Creative" },
        { name: "Telecommunication" },
        { name: "Restaurant " },
        { name: "Programing " },
        { name: "Architecture" },
      ],
    },
  ];

  const ter = [
    { one: <FaTwitter /> },
    { one: <FaFacebookF /> },
    { one: <FaPinterestP /> },
  ];

  return (
    <div className="w-full h-svh bg-green-50 relative z-10  ">
      <div className=" grid grid-cols-3 gap-4 w-9/12 mx-auto py-10">
        <div className="relative ">
          <div className="flex items-center gap-4 text-3xl font-bold text-green-900 cursor-pointer">
            <GiGreenhouse className="w-16 h-16" />
            Agrica
          </div>
          <div className="text-lg text-green-800 my-10">
            The information is also part of the MF Rural, where you can find
            news, quotes, technological information and others, in addition
          </div>

          <div className="flex gap-4">
            {ter.map((val, i) => {
              return (
                <div className="h-10 w-10  rounded-3xl bg-green-100 text-green-700  hover:text-white  cursor-pointer   ">
                  <div className="hover:bg-green-600 h-10 w-10  rounded-3xl  items-center justify-center flex ">
                    {" "}
                    {val.one}{" "}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {foot.map((val, i) => {
          return (
            <div className="relative ">
              <div className=" text-2xl text-green-900  font-semibold capitalize">
                {val.tile}
              </div>
              <div className="text-green-800 text-lg cursor-pointer my-7  leading-10  ">
                {val.sub.map((valtwo, indx) => {
                  return (
                    <div key={i} className="hover:text-green-400">
                      {valtwo.name}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-green-900  text-lg flex items-center gap-2 justify-center my-64 ">
        Copyright <FaRegCopyright /> 2024 All rights reserved | This template is
        made with <IoMdHeart className="h-6 w-6 text-green-500" /> by{" "}
        <div className=" cursor-pointer text-green-500 font-medium">
          Colorlib
        </div>
      </div>
    </div>
  );
}

export default footer;
