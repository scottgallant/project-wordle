import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Results({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess, index) => (
        <Guess key={index} guess={guess} />
      ))}
      {range(NUM_OF_GUESSES_ALLOWED - guessList.length).map((num1) => (
        <p className="guess" key={num1}>
          {range(5).map((num2) => (
            <span className="cell" key={num2}></span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Results;
