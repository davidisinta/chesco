import React from "react";
// import './Chatbot.css'; // Assuming you have a CSS file for styling

const GenerateFitness = () => {
  const handleCustomizeClick = () => {
   console.log("customize button clicked")
  };

  const handleGenerateClick = () => {
    // Logic for generating workout plan can be added here
    console.log("Generate button clicked");
  };

  return (

<div className="chatbot-container max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
  <div className="flex items-center mb-4">
    <div className="chatbot-profile border-5 rounded-full bg-gray-100 flex-shrink-0">
      <div className="w-10 h-10 overflow-hidden rounded-full">
        <img
          src={`${process.env.PUBLIC_URL}/mobo_ai.png`}
          alt="Chatbot Profile Pic"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="chatbot-text ml-3 text-gray-700">
      <p>Hello Thereee!!! My name is Mobo, your AI gym
        assistant. Based on your sign up form,
        I am ready to generate a personalized workout plan for you.</p>
    </div>
  </div>

  <div className="flex items-center mb-4">
    <div className="chatbot-profile border-5 rounded-full bg-gray-100 flex-shrink-0">
      <div className="w-10 h-10 overflow-hidden rounded-full">
        <img
          src={`${process.env.PUBLIC_URL}/mobo_ai.png`}
          alt="Chatbot Profile Pic"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <div className="chatbot-text ml-3 text-gray-700">
      <p>
        If you wish to customize your preferences further, click the customize button.
        If you are ready to get a personalized workout plan click the generate button.
      </p>
    </div>
  </div>

  <div className="chatbot-buttons flex justify-between">
    <button onClick={handleCustomizeClick} className="customize-button bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
      Customize
    </button>
    <button onClick={handleGenerateClick} className="generate-button bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
      Generate
    </button>
  </div>
</div>


  );


};
export default GenerateFitness;