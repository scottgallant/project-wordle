import React from "react";

function Form() {
  const [guess, setGuess] = React.useState(" ");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(guess);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
      />
    </form>
  );
}

export default Form;
