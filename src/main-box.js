// MainBox.js
import React, { useState } from "react";
import "./main-box.css";
import starIcon from "./images/icon-star.svg";
import ScoreCircle from "./ScoreCircle";
import ThanksPage from "./thanks";

// Main container
function MainBox() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedScore, setSelectedScore] = useState(0); // State to track the selected score

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleScoreSelection = (score) => {
    setSelectedScore(score); // Update the selected score when a score circle is clicked
  };

  return (
    <div className="main-box-body">
      {submitted ? (
        <ThanksPage score={selectedScore} />
      ) : (
        <>
          <Titles />
          <ScoresSection
            onScoreSelect={handleScoreSelection}
            selectedScore={selectedScore}
          />
          <SubmitButton onClick={handleSubmit} />
        </>
      )}
    </div>
  );
}

// component for titles section
function Titles() {
  return (
    <div className="titles-body">
      <div className="star-body">
        <img src={starIcon} alt="star icon" className="star-icon" />
      </div>
      <h1 className="main-title">How did we do?</h1>
      <p className="paragraph">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </div>
  );
}

// component for scores section
function ScoresSection({ onScoreSelect, selectedScore }) {
  const handleScoreClick = (score) => {
    onScoreSelect(score); // Call the onScoreSelect callback with the selected score
  };

  return (
    <div className="scores-section">
      <ScoreCircle
        number="1"
        onClick={() => handleScoreClick(1)}
        selected={selectedScore === 1} // Check if this score is selected
      />
      <ScoreCircle
        number="2"
        onClick={() => handleScoreClick(2)}
        selected={selectedScore === 2}
      />
      <ScoreCircle
        number="3"
        onClick={() => handleScoreClick(3)}
        selected={selectedScore === 3}
      />
      <ScoreCircle
        number="4"
        onClick={() => handleScoreClick(4)}
        selected={selectedScore === 4}
      />
      <ScoreCircle
        number="5"
        onClick={() => handleScoreClick(5)}
        selected={selectedScore === 5}
      />
    </div>
  );
}

// submit button component
function SubmitButton({ onClick }) {
  return (
    <button className="submit-button" onClick={onClick}>
      SUBMIT
    </button>
  );
}

export default MainBox;
