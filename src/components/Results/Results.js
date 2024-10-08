import React from "react";

function Results({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map(({ id, value }) => (
        <p className="guess" key={id}>
          {value}
        </p>
      ))}
    </div>
  );
}

export default Results;
