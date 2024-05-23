import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BodyGoalsForm({ addFitnessData }) {
  const [strengthTraining, setStrengthTraining] = useState("");
  const [weightManagement, setWeightManagement] = useState("");
  const [endurance, setEndurance] = useState("");
  const [flexibilityMobility, setFlexibilityMobility] = useState("");
  const [mentalWellBeing, setMentalWellBeing] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // addFitnessData({
    //   strengthTraining,
    //   weightManagement,
    //   endurance,
    //   flexibilityMobility,
    //   mentalWellBeing
    // });
    navigate('/exercisePreferences');
  }

  const renderButton = (value, state, setState) => (
    <button
      type="button"
      className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 ${state === value ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
      onClick={() => setState(value)}
    >
      {value}
    </button>
  );

  return (
    <div className="w-3/4 flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h4 className="text-2xl font-semibold text-gray-700 mb-4">Body Goals</h4>
        <form onSubmit={submit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Strength Training Goals
            </label>
            <div className="flex space-x-2">
              {renderButton("Build Muscle Mass", strengthTraining, setStrengthTraining)}
              {renderButton("Increase Strength", strengthTraining, setStrengthTraining)}
              {renderButton("Functional Strength", strengthTraining, setStrengthTraining)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Weight Management Goals
            </label>
            <div className="flex space-x-2">
              {renderButton("Weight Loss", weightManagement, setWeightManagement)}
              {renderButton("Weight Gain", weightManagement, setWeightManagement)}
              {renderButton("Weight Maintenance", weightManagement, setWeightManagement)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Endurance Goals
            </label>
            <div className="flex space-x-2">
              {renderButton("Cardiovascular Endurance", endurance, setEndurance)}
              {renderButton("Muscular Endurance", endurance, setEndurance)}
              {renderButton("General Stamina", endurance, setEndurance)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Flexibility and Mobility Goals
            </label>
            <div className="flex space-x-2">
              {renderButton("Increase Flexibility", flexibilityMobility, setFlexibilityMobility)}
              {renderButton("Improve Mobility", flexibilityMobility, setFlexibilityMobility)}
              {renderButton("Injury Prevention", flexibilityMobility, setFlexibilityMobility)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Mental and Emotional Well-being Goals
            </label>
            <div className="flex space-x-2">
              {renderButton("Stress Relief", mentalWellBeing, setMentalWellBeing)}
              {renderButton("Improve Mood", mentalWellBeing, setMentalWellBeing)}
              {renderButton("Boost Confidence", mentalWellBeing, setMentalWellBeing)}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Next
          </button>
        </form>
        <div className="mt-4 flex justify-center">
          <span className="inline-block bg-gray-300 text-white px-3 py-1 rounded-full mr-2"><b>1</b></span>
          <span className="inline-block bg-gray-300 text-gray-500 px-3 py-1 rounded-full mr-2">2</span>
          <span className="inline-block bg-green-500 text-gray-500 px-3 py-1 rounded-full mr-2">3</span>
          <span className="inline-block bg-gray-300 text-gray-500 px-3 py-1 rounded-full">4</span>
        </div>
      </div>
    </div>
  );
}
