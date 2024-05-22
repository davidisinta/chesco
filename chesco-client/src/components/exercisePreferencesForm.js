import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExercisePreferencesForm({ addFitnessData }) {
  const [daysPerWeek, setDaysPerWeek] = useState("");
  const [workoutDuration, setWorkoutDuration] = useState("");
  const [pushUps, setPushUps] = useState("");
  const [runDistance, setRunDistance] = useState("");
  const [pullUps, setPullUps] = useState("");
  const [waterIntake, setWaterIntake] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // if (!daysPerWeek || !workoutDuration || !pushUps || !runDistance || !pullUps || !waterIntake) {
    //   alert("All fields are necessary!");
    // } else {
    //   addFitnessData({
    //     daysPerWeek,
    //     workoutDuration,
    //     pushUps,
    //     runDistance,
    //     pullUps,
    //     waterIntake
    //   });
      navigate('/generateFitness');
    // }
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
        <h4 className="text-2xl font-semibold text-gray-700 mb-4">Exercise preferences</h4>
        <form onSubmit={submit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              How many days a week do you exercise?
            </label>
            <div className="flex space-x-2">
              {renderButton("<3", daysPerWeek, setDaysPerWeek)}
              {renderButton("3-5 days", daysPerWeek, setDaysPerWeek)}
              {renderButton("6-7 days", daysPerWeek, setDaysPerWeek)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              How long do you workout (in minutes)?
            </label>
            <div className="flex space-x-2">
              {renderButton("<30", workoutDuration, setWorkoutDuration)}
              {renderButton("30-60", workoutDuration, setWorkoutDuration)}
              {renderButton(">60", workoutDuration, setWorkoutDuration)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              How many push-ups can you do?
            </label>
            <div className="flex space-x-2">
              {renderButton("<10", pushUps, setPushUps)}
              {renderButton("10-20", pushUps, setPushUps)}
              {renderButton(">20", pushUps, setPushUps)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              What distance can you run (in km)?
            </label>
            <div className="flex space-x-2">
              {renderButton("<1", runDistance, setRunDistance)}
              {renderButton("1-5", runDistance, setRunDistance)}
              {renderButton(">5", runDistance, setRunDistance)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              How many pull-ups can you do?
            </label>
            <div className="flex space-x-2">
              {renderButton("<5", pullUps, setPullUps)}
              {renderButton("5-10", pullUps, setPullUps)}
              {renderButton(">10", pullUps, setPullUps)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              How many glasses of water do you drink a day?
            </label>
            <div className="flex space-x-2">
              {renderButton("<3", waterIntake, setWaterIntake)}
              {renderButton("3-5", waterIntake, setWaterIntake)}
              {renderButton(">5", waterIntake, setWaterIntake)}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Save
          </button>
        </form>
        <div className="mt-4 flex justify-center">
          <span className="inline-block bg-gray-300 text-white px-3 py-1 rounded-full mr-2"><b>1</b></span>
          <span className="inline-block bg-gray-300 text-gray-500 px-3 py-1 rounded-full mr-2">2</span>
          <span className="inline-block bg-gray-300 text-gray-500 px-3 py-1 rounded-full mr-2">3</span>
          <span className="inline-block bg-green-500 text-gray-500 px-3 py-1 rounded-full">4</span>
        </div>
      </div>
    </div>
  );
}
