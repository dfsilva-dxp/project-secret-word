import { useCallback, useEffect, useState } from "react";

import { Container, Content, Game, GameOver, StartScreen } from "components";

import { stages } from "utils/constants/stages";

import { wordsList } from "data/words";

const Home = () => {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState<string[]>([]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWord = useCallback(
    (category: string) => {
      const word =
        words[category][Math.floor(Math.random() * words[category].length)];

      return word;
    },
    [words]
  );

  const pickCategory = useCallback(() => {
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    return category;
  }, [words]);

  const startGame = useCallback(() => {
    clearLetterStates();

    const category = pickCategory();
    const word = pickWord(category);
    const letters = word.toLowerCase().split("");

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);

    setGameStage(stages[1].name);
  }, [pickCategory, pickWord]);

  const verifyLetter = useCallback(
    (letter: string) => {
      const normalizedLetter = letter.toLowerCase();

      if (
        guessedLetters.includes(normalizedLetter) ||
        wrongLetters.includes(normalizedLetter)
      )
        return;

      if (letters.includes(normalizedLetter)) {
        setGuessedLetters((actualGuessedLetters) => [
          ...actualGuessedLetters,
          normalizedLetter
        ]);
      } else {
        setWrongLetters((actualWrongLetters) => [
          ...actualWrongLetters,
          normalizedLetter
        ]);

        setGuesses((actualGuesses) => actualGuesses - 1);
      }
    },
    [guessedLetters, letters, wrongLetters]
  );

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  const retry = useCallback(() => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  }, []);

  useEffect(() => {
    if (guesses <= 0) {
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (
      uniqueLetters.length > 0 &&
      guessedLetters.length === uniqueLetters.length
    ) {
      setScore((currentScore) => (currentScore += 100));

      setTimeout(() => {
        startGame();
      }, 2000);
    }
  }, [guessedLetters, letters, startGame]);

  return (
    <Container>
      <Content>
        {gameStage === "start" && <StartScreen handleStarGame={startGame} />}
        {gameStage === "game" && (
          <Game
            verifyLetter={verifyLetter}
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guesses={guesses}
            score={score}
          />
        )}
        {gameStage === "end" && <GameOver retry={retry} score={score} />}
      </Content>
    </Container>
  );
};

export default Home;
