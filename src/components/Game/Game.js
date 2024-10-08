import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import Display from "../Display/Display";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);

  // he named this function "handleSubmitGuess". It's a "handler" function
  function updateGuessList(guess) {
    // console.log("received guess", guess);
    const newGuess = {
      id: Math.random(),
      value: guess,
    };
    setGuessList([...guessList, newGuess]);
  }

  return (
    <div>
      <Display guessList={guessList} />
      <Form
        guess={guess}
        setGuess={setGuess}
        updateGuessList={updateGuessList}
      />
    </div>
  );
}

export default Game;
