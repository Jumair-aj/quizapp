import React, { useState } from 'react';
// import './QuizButtons.css'; // Import CSS file for styling

const QuizButtons = ({ options,setSelectedOption,selectedOption,answered,rightAnswer }) => {

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="quiz-buttons-container">
      {options?.map((option, index) => (
        <button
          key={index}
          disabled={answered}
          className={`quiz-button ${(answered && rightAnswer === option.answer) ? 'green' : ''} ${selectedOption === option.answer ? (answered ? (rightAnswer !== selectedOption) && 'red':'selected') : ''} `}
          onClick={() => handleOptionClick(option.answer)}
        >
          {option.answer}
        </button>
      ))}
      {/* <p>Selected Option: {selectedOption}</p> */}
    </div>
  );
};

export default QuizButtons;
