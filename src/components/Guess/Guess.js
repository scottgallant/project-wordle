import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <div className="guess-results">
      <p className="guess">
        {guess.split("").map((letter, index) => (
          <span className="cell" key={index}>
            {letter}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Guess;
