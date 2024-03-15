import React, { useState } from "react";

function ScoreKeeper({ playerNums = 3, target = 5 }) {
  const [scores, setScores] = useState(new Array(playerNums).fill(0));
  const [winner, setWinner] = useState(null);

  const incrementScore = (idx) => {
    if (!winner && scores[idx] < target) {
      const newScores = [...scores];
      newScores[idx]++;
      setScores(newScores);
      if (newScores[idx] === target) {
        setWinner(idx);
      }
    }
  };

  const reset = () => {
    setScores(new Array(playerNums).fill(0));
    setWinner(null);
  };

  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((score, idx) => {
          return (
            <li key={idx}>
              Player {idx + 1}:{" "}
              <span style={{ color: winner === idx ? "red" : "black" }}>
                {score}
              </span>{" "}
              <button
                onClick={() => incrementScore(idx)}
                disabled={winner !== null || score >= target}
              >
                +1
              </button>{" "}
              {winner === idx && <span>WINNER!</span>}
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default ScoreKeeper;
