import React from 'react'
import { useSelector } from "react-redux";
function ScoreCard() {
    const score = useSelector((state) => state.score);
    return (
      <div className="scorecard">
        <h2>Score : {score}</h2>
      </div>
    );
}

export default ScoreCard
