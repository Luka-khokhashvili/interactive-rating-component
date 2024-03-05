import "./main-box.css";
import starIcon from "./images/icon-star.svg";
import ScoreCircle from "./ScoreCircle";

function MainBox() {
  return (
    <div className="main-box-body">
      <Titles />
      <ScoresSection />
      <SubmitButton />
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

function SubmitButton() {
  return <button className="submit-button">SUBMIT</button>;
}

export default MainBox;
