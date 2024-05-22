import React from "react";
import BasicInfo from "../components/basicInfoForm";

const CustomizeFitness = () => {
  return (

      <div className="flex h-screen">
          <div className="w-1/2 bg-black text-white flex items-center justify-center">
          </div>
          <div className="w-3/4 flex items-center justify-center">
              <BasicInfo />
          </div>
      </div>


  )
      ;
};
export default CustomizeFitness;