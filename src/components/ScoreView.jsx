import React from "react";
import "./ScoreView.css";
import Questions from "./questions";
 
const ScoreView = ({ handleResetClick, score }) => {
  return (
    <div className="quiz">
      <p>Tvoj skor je {score} od {Questions.length}</p>
      <button onClick={handleResetClick}>Resetuj</button>
    </div>
  );
};

export default ScoreView;