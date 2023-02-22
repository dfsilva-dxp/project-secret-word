import { Game } from "components";

import useGame from "hooks/useGame";

const GamePage = () => {
  const {
    verifyLetter,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score
  } = useGame();

  return (
    <Game
      verifyLetter={verifyLetter}
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
    />
  );
};

export default GamePage;
