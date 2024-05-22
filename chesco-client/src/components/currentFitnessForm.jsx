import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CurrentFitnessFrom({ addBasicData }) {
  // State variables to store user input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  // Navigation function for programmatic routing
  const navigate = useNavigate();

  // Function to handle form submission
  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      // Alert if any field is missing
      alert("All fields necessary!");
    } else {
      // Call the addBasicData function provided by the parent component
      // addBasicData(name, email, contact);
      // Navigate to the '/questions' route
      navigate('/');
    }
  }

  return (
    <div className="w-3/4 flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h4 className="text-2xl font-semibold text-gray-700 mb-4">Current Fitness Level</h4>
        <form onSubmit={submit}>
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              <b>3.</b> Contact No.
            </label>
            <input
              type="tel"
              name="contact"
              value={contact}
              onChange={(e) => { setContact(e.target.value) }}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Enter your Contact No."
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
          <span className="inline-block  bg-gray-300 text-white px-3 py-1 rounded-full mr-2"><b>1</b></span>
          <span className="inline-block bg-green-500 text-gray-500 px-3 py-1 rounded-full mr-2">2</span>
          <span className="inline-block bg-gray-300 text-gray-500 px-3 py-1 rounded-full mr-2">3</span>
          <span className="inline-block bg-gray-300 text-gray-500 px-3 py-1 rounded-full">4</span>
        </div>
      </div>
    </div>
  );
}
