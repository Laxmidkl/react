import React from "react";

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
    <div className="grid gap-20">
      <Banner />
      <Agricultural />
     
      <Field />
      {/* <Number /> */}
      <hr />
      <Why />
      <Lawn />
      <Need />
    </div>
  );
}
