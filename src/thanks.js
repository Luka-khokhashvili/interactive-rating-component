import "./thanks.css";
import ThankYouImage from "./images/illustration-thank-you.svg";

function ThanksPage({ score }) {
  return (
    <div className="Thanks-body">
      <img src={ThankYouImage} alt="Thank you ilustration" />
      <ScoreDisplay score={score} />
      <ThankYouText />
    </div>
  );
}

function ScoreDisplay(props) {
  return (
    <div className="score-display-body">
      You selected {props.score} out of 5
    </div>
  );
}

function ThankYouText() {
  return (
    <div className="thank-text-body">
      <h1 className="main-title">Thank you!</h1>
      <p className="paragraph">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThanksPage;
