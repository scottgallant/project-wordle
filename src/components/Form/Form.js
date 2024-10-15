import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Form({ handleSubmitGuess, gameStatus }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required // This attribute makes the input field mandatory.
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        maxLength="5"
        title="Please enter a 5-letter word."
        pattern="[A-Za-z]{5}"
        disabled={gameStatus !== "running"}
      />
    </form>
  );
}

export default Form;
