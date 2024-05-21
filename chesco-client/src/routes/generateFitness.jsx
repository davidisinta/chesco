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
    <div className="chatbot-container">
      <div className="chatbot-profile">
        <img
          src={`${process.env.PUBLIC_URL}/mobo_ai.png`}
          alt="Chatbot Profile Pic"
          className="profile-image"
        />
      </div>
      <div className="chatbot-text">
        <p>Hi user, based on your body goals I am ready to generate a workout plan for you.</p>
        <p>
          If you wish to customize your preferences further, click the customize button.
          If you are ready to get a personalized workout plan click the generate button.
        </p>
      </div>
      <div className="chatbot-buttons">
        <button onClick={handleCustomizeClick} className="customize-button">
          Customize
        </button>
        <button onClick={handleGenerateClick} className="generate-button">
          Generate
        </button>
      </div>
    </div>
  );



};
export default GenerateFitness;