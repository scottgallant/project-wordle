import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Results({ guessList }) {
  console.log(guessList.length);

  return (
    <div className="guess-results">
      {guessList.map((guess, index) => (
        <Guess key={index} guess={guess} />
      ))}
      {range(NUM_OF_GUESSES_ALLOWED - guessList.length).map((num) => (
        <p className="guess">
          {range(5).map((num) => (
            <span className="cell" key={num}></span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Results;
