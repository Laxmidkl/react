import React from "react";
import Banner from "../PageComponents/ABOUT/Banner";
import Agricultural from "../PageComponents/Home/Agricultural-td";
import Field from "../PageComponents/Home/Field";
import Number from "../PageComponents/Home/Number";
import Why from "../PageComponents/Home/Why";
import Need from "../PageComponents/Home/Need";
import Lawn from "../PageComponents/Home/Lawn";

function Aboutus() {
  return (
    <div className=" grid gap-20 overflow-x-auto ">
      <Banner />
      <Agricultural />
      <Field />
      <Number />
      <hr />
      <Why />
      <Lawn />
      <Need />
    </div>
  );
}

export default Aboutus;
