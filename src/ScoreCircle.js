import "./ScoreCircle.css";

function ScoreCircle(props) {
  return <button className="score-body">{props.number}</button>;
}

export default ScoreCircle;
