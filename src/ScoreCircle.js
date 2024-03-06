// ScoreCircle.js
import React from "react";
import "./ScoreCircle.css";

function ScoreCircle({ number, onClick, selected }) {
  const handleClick = () => {
    onClick(number);
  };

  return (
    <button
      className={"score-body " + (selected ? "selected" : "unselected")}
      onClick={handleClick}
    >
      {number}
    </button>
  );
}

export default ScoreCircle;
