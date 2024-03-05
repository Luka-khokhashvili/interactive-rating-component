import "./ScoreCircle.css";

function ScoreCircle(props) {
  return <h4 className="score-body">{props.number}</h4>;
}

export default ScoreCircle;
