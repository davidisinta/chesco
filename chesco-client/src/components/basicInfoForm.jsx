import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BasicInfo({ addBasicData }) {
  // State variables to store user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  // Navigation function for programmatic routing
  const navigate = useNavigate();

  // Function to handle form submission
  const submit = (e) => {
    e.preventDefault();
    // if (!name || !email || !age || !gender || !height || !weight) {
    //   // Alert if any field is missing
    //   alert("All fields are necessary!");
    // } else {
      // Call the addBasicData function provided by the parent component
      // addBasicData(name, email, contact, age, gender, height, weight);
      // Navigate to the '/currentFitnessLevel' route
      navigate('/currentFitnessLevel');
    // }
  }

  return (
    <div className="w-3/4 flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h4 className="text-2xl font-semibold text-gray-700 mb-4">Basic Information</h4>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label className="block text-gray-700 mb-2">
              <b>1.</b> Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Enter your Name"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 mb-2">
              <b>2.</b> Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Enter your Email"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 mb-2">
              <b>4.</b> Age
            </label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => { setAge(e.target.value) }}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Enter your Age"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 mb-2">
              <b>5.</b> Gender
            </label>
            <select
              name="gender"
              value={gender}
              onChange={(e) => { setGender(e.target.value) }}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 mb-2">
              <b>6.</b> Height (cm)
            </label>
            <input
              type="number"
              name="height"
              value={height}
              onChange={(e) => { setHeight(e.target.value) }}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Enter your Height"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 mb-2">
              <b>7.</b> Weight (kg)
            </label>
            <input
              type="number"
              name="weight"
              value={weight}
              onChange={(e) => { setWeight(e.target.value) }}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Enter your Weight"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Next
          </button>
        </form>
        <div className="mt-4 flex justify-center">
          <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full mr-2"><b>1</b></span>
          <span className="inline-block bg-gray-300 text-gray-500 px-3 py-1 rounded-full mr-2">2</span>
          <span className="inline-block bg-gray-300 text-gray-500 px-3 py-1 rounded-full">3</span>
          <span className="inline-block bg-gray-300 text-gray-500 px-3 py-1 rounded-full mr-2">4</span>
        </div>
      </div>
    </div>
  );
}
