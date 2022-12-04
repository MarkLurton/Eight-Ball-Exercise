import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const [message, setMessage] = useState("Think of a Question");
  const [color, setColor] = useState("black");
  const [greenCount, setGreenCount] = useState(0);
  const [goldenrodCount, setGoldenrodCount] = useState(0);
  const [redCount, setRedCount] = useState(0);
  const spinBall = () => {
    const answer = answers[Math.floor(Math.random() * answers.length)];
    setMessage(answer.msg);
    setColor(answer.color);
    if (answer.color === "green") {
      setGreenCount(greenCount + 1);
    } else if (answer.color === "goldenrod") {
      setGoldenrodCount(goldenrodCount + 1);
    } else if (answer.color === "red") {
      setRedCount(redCount + 1);
    }
  };
  const reset = () => {
    setMessage("Think of a Question");
    setColor("black");
    setGreenCount(0);
    setGoldenrodCount(0);
    setRedCount(0);
  };
  return (
    <>
      <div
        className="Eight-Ball"
        style={{ backgroundColor: `${color}`, color: "white" }}
        onClick={spinBall}
      >
        {message}
      </div>
      <div className="Eight-Ball-counts">
        <p>
          <b style={{ color: "green" }}>Green Count:</b> {greenCount}
        </p>
        <p>
          <b style={{ color: "goldenrod" }}>Goldenrod Count:</b>{" "}
          {goldenrodCount}
        </p>
        <p>
          <b style={{ color: "red" }}>Red Count:</b> {redCount}
        </p>
      </div>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default EightBall;
