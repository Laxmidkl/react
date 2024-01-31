import React from "react";
import CountUp from 'react-countup';

function Number() {
  const asd = [
    {
      number: 20,
      description: `  List of any and all companies related to agribusiness`,
    
     
    },

    {
      number: 10,
      description: `  List of any and all companies related to agribusiness`,
    },

    {
      number: 12,
      description: `  List of any and all companies related to agribusiness`,
    },

    {
      number: 280,
      description: `  List of any and all companies related to agribusiness`,
    },
  ];

  return (




    <div className=" h-52 flex">
      {asd.map((val, i) => {
        return (
          <div>
            <div className="text-green-900 text-5xl font-extrabold relative  inline left-11">
              {/* {val.number} */}
            
    <CountUp start={0} end={val.number} />

    {`+`}
              
             
            </div>

            <div className="text-blue-900 relative top-7  ">
              {val.description}
            </div>
          </div>
        );
      })}

  
  
    </div>
    

    
  );
}

export default Number;
