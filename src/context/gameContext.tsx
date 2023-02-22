import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Smiley } from "phosphor-react";

import { stages } from "utils/constants/stages";
import { wordsList } from "data/words";
import usePickWordAndCategory from "hooks/usePickWordAndCategory";

export interface GameProviderProps {
  children: ReactNode;
}

export interface GameContextData {
  verifyLetter: (letter: string) => void;
  retry: () => void;
  startGame: () => void;
  gameStage: string;
  pickedWord: string;
  pickedCategory: string;
  letters: string[];
  guessedLetters: string[];
  wrongLetters: string[];
  guesses: number;
  score: number;
}

export const GameContext = createContext({} as GameContextData);

export function GameProvider({ children }: GameProviderProps) {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState<string[]>([]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();
  const { pickWord, pickCategory } = usePickWordAndCategory(words);

  const startGame = useCallback(() => {
    try {
      clearLetterStates();

      const category = pickCategory();
      const word = pickWord(category);
      const letters = word.toLowerCase().split("");

      setPickedWord(word);
      setPickedCategory(category);
      setLetters(letters);

      setGameStage(stages[1].name);

      navigate("/game");
    } catch (error) {
      toast.error("OPS... :( Algo deu errado. Tente novamente!", {
        theme: "colored",
        icon: false
      });

      navigate("/");
    }
  }, [pickCategory, pickWord, navigate]);

  const verifyLetter = useCallback(
    (letter: string) => {
      const normalizedLetter = letter.toLowerCase();

      if (
        guessedLetters.includes(normalizedLetter) ||
        wrongLetters.includes(normalizedLetter)
      ) {
        toast.error("Você já utilizou essa letra, tente uma outra!", {
          theme: "colored",
          icon: false
        });
      }

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
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    if (guesses <= 0) {
      clearLetterStates();
      setGameStage(stages[2].name);
      toast.success("Que pena... :( Você perdeu o jogo!", {
        theme: "colored",
        icon: false
      });
      navigate("/end");
    }
  }, [guesses, navigate]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (
      uniqueLetters.length > 0 &&
      guessedLetters.length === uniqueLetters.length
    ) {
      setScore((currentScore) => (currentScore += 100));

      toast.success("BOAAAAAA...", {
        theme: "colored",
        icon: <Smiley size={20} weight="bold" />
      });

      setTimeout(() => {
        startGame();
      }, 2000);
    }
  }, [guessedLetters, letters, startGame]);

  return (
    <GameContext.Provider
      value={{
        verifyLetter,
        retry,
        startGame,
        gameStage,
        pickedWord,
        pickedCategory,
        letters,
        guessedLetters,
        wrongLetters,
        guesses,
        score
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
