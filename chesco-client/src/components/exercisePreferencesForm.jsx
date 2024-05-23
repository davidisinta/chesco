import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExercisePreferencesForm({ addFitnessData }) {
  const [typeOfExercise, setTypeOfExercise] = useState([]);
  const [exerciseEnvironment, setExerciseEnvironment] = useState([]);
  const [timeOfDay, setTimeOfDay] = useState("");
  const [targetBodyParts, setTargetBodyParts] = useState([]);
  const [exerciseFrequency, setExerciseFrequency] = useState([]);

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // addFitnessData({
    //   typeOfExercise,
    //   exerciseEnvironment,
    //   timeOfDay,
    //   targetBodyParts,
    //   exerciseFrequency
    // });
    navigate('/generateFitness');
  }

  const renderButton = (value, state, setState, multiple = false) => (
    <button
      type="button"
      className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500 ${state.includes(value) ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
      onClick={() => {
        if (multiple) {
          if (state.includes(value)) {
            setState(state.filter(item => item !== value));
          } else {
            setState([...state, value]);
          }
        } else {
          setState([value]);
        }
      }}
    >
      {value}
    </button>
  );

  return (
    <div className="w-3/4 flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h4 className="text-2xl font-semibold text-gray-700 mb-4">Exercise Preferences</h4>
        <form onSubmit={submit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Preferred Type of Exercise
            </label>
            <div className="flex space-x-2">
              {renderButton("Cardio", typeOfExercise, setTypeOfExercise, true)}
              {renderButton("Strength Training", typeOfExercise, setTypeOfExercise, true)}
              {renderButton("Flexibility/Balance", typeOfExercise, setTypeOfExercise, true)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Exercise Environment
            </label>
            <div className="flex space-x-2">
              {renderButton("Gym", exerciseEnvironment, setExerciseEnvironment, true)}
              {renderButton("Home", exerciseEnvironment, setExerciseEnvironment, true)}
              {renderButton("Outdoor", exerciseEnvironment, setExerciseEnvironment, true)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Time of Day for Exercise
            </label>
            <div className="flex space-x-2">
              {renderButton("Morning", timeOfDay, setTimeOfDay)}
              {renderButton("Afternoon", timeOfDay, setTimeOfDay)}
              {renderButton("Evening", timeOfDay, setTimeOfDay)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Target Body Parts
            </label>
            <div className="flex space-x-2">
              {renderButton("Upper Body", targetBodyParts, setTargetBodyParts, true)}
              {renderButton("Lower Body", targetBodyParts, setTargetBodyParts, true)}
              {renderButton("Core", targetBodyParts, setTargetBodyParts, true)}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Exercise Frequency
            </label>
            <div className="flex space-x-2">
              {renderButton("Daily", exerciseFrequency, setExerciseFrequency, true)}
              {renderButton("Several times a week", exerciseFrequency, setExerciseFrequency, true)}
              {renderButton("Occasionally", exerciseFrequency, setExerciseFrequency, true)}
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
