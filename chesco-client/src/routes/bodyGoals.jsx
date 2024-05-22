import React from "react";
import BodyGoalsForm from "../components/bodyGoalsForm";
import CurrentFitnessFrom from "../components/currentFitnessForm";

const BodyGoals = () => {
  return (

      <div className="flex h-screen">
        <div className="w-1/2 bg-image text-white flex items-center justify-center">
        </div>
        <div className="w-3/4 flex items-center justify-center">
        <BodyGoalsForm/>
        </div>
      </div>




)
  ;
};
export default BodyGoals;