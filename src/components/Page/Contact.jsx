import React, { useState } from "react";

function Contact() {
  const [asd, setasd] = useState(0)
  return (
    <div className="">
      <button onClick={()=>{
 setasd(asd+1)
}}
       className="text-white rounded-lg border border-gray-200 bg-blue-500 h-10 w-40 ">
        Button
      </button>
      {asd}


      {
  asd>0  &&
  <img src=" https://media.gettyimages.com/id/a0125-000186/photo/tractor-plowing-soil.jpg?s=612x612&w=0&k=20&c=8CAVs93SBKkJOthSndUHnaOJ4YmIWH7VlsmeYPqupu4=" />
      }
  <button onClick={()=>{
    setasd(asd-1)
  }}   className="text-white rounded-lg border border-gray-200 bg-blue-500 h-10 w-40 ">
  Button
</button>

</div>
  )
}


export default Contact;
