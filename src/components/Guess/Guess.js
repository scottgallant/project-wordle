import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

// NOTE the official answer creates another React component called "Cell" to handle the individual cells:

// function Cell({ letter, status }) {
//   const className = status ? `cell ${status}` : 'cell';

//   return <span className={className}>{letter}</span>;
// }

// But I like my solution better
// See here: https://github.com/joy-of-react/project-wordle/blob/14ad4f2b571cc7cd6e7f3a2e687c297e941f3aab/src/components/Guess/Guess.js

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((num) => (
          <span
            key={num}
            className={`cell ${result ? result[num].status : ""}`}
          >
            {value ? value[num] : undefined}
          </span>
          //   <Cell
          //   key={num}
          //   letter={result ? result[num].letter : undefined}
          //   status={result ? result[num].status : undefined}
          // />
        ))}
      </p>
    </div>
  );
}

export default Guess;
