import React, { useState } from "react";
import "./main-box.css";
import starIcon from "./images/icon-star.svg";
import ScoreCircle from "./ScoreCircle";
import ThanksPage from "./thanks"; // Importing ThanksPage component

function MainBox() {
  const [submitted, setSubmitted] = useState(false); // State to track if the form is submitted

  const handleSubmit = () => {
    // Handle form submission
    // For now, just setting the state to true to simulate submission
    setSubmitted(true);
  };

  return (
    <div className="main-box-body">
      {submitted ? (
        <ThanksPage /> // Render ThanksPage if form is submitted
      ) : (
        <>
          <Titles />
          <ScoresSection />
          <SubmitButton onClick={handleSubmit} />
        </>
      )}
    </div>
  );
}

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

function ScoresSection() {
  return (
    <div className="scores-section">
      <ScoreCircle number="1" />
      <ScoreCircle number="2" />
      <ScoreCircle number="3" />
      <ScoreCircle number="4" />
      <ScoreCircle number="5" />
    </div>
  );
}

function SubmitButton({ onClick }) {
  return (
    <button className="submit-button" onClick={onClick}>
      SUBMIT
    </button>
  );
}

export default MainBox;
