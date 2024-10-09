import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Form({ guess, setGuess, updateGuessList, guessList }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        updateGuessList(guess);
        setGuess("");
      }}
    >
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
        disabled={NUM_OF_GUESSES_ALLOWED === guessList.length && "true"}
      />
    </form>
  );
}

export default Form;
