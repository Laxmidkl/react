import React from "react";

import { GiGreenhouse } from "react-icons/gi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import Banner from "../PageComponents/Home/Banner";
import Agricultural from "../PageComponents/Home/Agricultural-td";
import Field from "../PageComponents/Home/Field";
import Number from "../PageComponents/Home/Number";
import Why from "../PageComponents/Home/Why";
import Tips from "../PageComponents/Home/Tips";
import Need from "../PageComponents/Home/Need";
import Lawn from "../PageComponents/Home/Lawn";

export default function Home() {
  return (
    <div>
      <Banner />
      <Agricultural />

      <div className="text-green-800 font-bold text-5xl relative text-center ">
        Services we provide
      </div>

      <Field />

      <Number />

      <hr />

      <Why />

      <div className="text-green-800 font-bold text-5xl relative text-center">
        Tips from experts
      </div>

      <Lawn />

      <Tips />

      <Need />
    </div>
  );
}
