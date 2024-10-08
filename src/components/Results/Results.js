import React from "react";

function Results({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess, index) => (
        <p className="guess" key={index}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default Results;
