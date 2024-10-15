import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import Results from "../Results/Results";
// import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

// function Banner({ guessList, answer }) {
//   const win = guessList.includes(answer);
//   const numOfGuesses = guessList.length;

//   if (win === true) {
//     return (
//       <div className="banner happy">
//         <p>
//           <strong>Congratulations!</strong> Got it in{" "}
//           <strong>
//             {guessList.length} {guessList.length === 1 ? "guesse" : "guesses"}
//           </strong>
//           .
//         </p>
//       </div>
//     );
//   } else if (NUM_OF_GUESSES_ALLOWED === numOfGuesses) {
//     return (
//       <div className="sad banner">
//         <p>Sorry the correct answer is {answer}</p>
//       </div>
//     );
//   } else {
//     return null;
//   }
// }

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running"); // won, lost, running

  // A "handler" function
  function handleSubmitGuess(guess) {
    newGuessList = [...guessList, guess];
    setGuessList(newGuessList);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (newGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
    console.log(gameStatus); // this won't be accurate since the value isn't updated until re-render occurs
  }

  return (
    <div>
      <Results guessList={guessList} answer={answer} />
      <Form
        handleSubmitGuess={handleSubmitGuess}
        guessList={guessList}
        answer={answer}
        gameStatus={gameStatus}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={guessList.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </div>
  );
}

export default Game;
