import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import Results from "../Results/Results";
// import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Banner({ guessList, answer }) {
  const win = guessList.includes(answer);
  const numOfGuesses = guessList.length;

  if (win === true) {
    return (
      <div className="banner happy">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {guessList.length} {guessList.length === 1 ? "guesse" : "guesses"}
          </strong>
          .
        </p>
      </div>
    );
  } else if (NUM_OF_GUESSES_ALLOWED === numOfGuesses) {
    return (
      <div className="sad banner">
        <p>Sorry the correct answer is {answer}</p>
      </div>
    );
  } else {
    return null;
  }
}

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  // he named this function "handleSubmitGuess". It's a "handler" function
  function updateGuessList(guess, answer) {
    setGuessList([...guessList, guess]);
  }

  return (
    <div>
      <Banner guessList={guessList} answer={answer} />
      <Results guessList={guessList} answer={answer} />
      <Form
        updateGuessList={updateGuessList}
        guessList={guessList}
        answer={answer}
      />
    </div>
  );
}

export default Game;
