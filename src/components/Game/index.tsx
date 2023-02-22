import { FormEvent, useRef, useState } from "react";
import { PaperPlaneRight } from "phosphor-react";

import * as S from "./styles";

import { GameProps } from "./game";

const Game = ({
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
}: GameProps) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef<HTMLInputElement>(null);

  const onFocus = () => {
    letterInputRef.current!.focus();
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    verifyLetter(letter);
    setLetter("");
    onFocus();
  };

  return (
    <S.Display>
      <S.Header>
        <h1>Vamos descobrir a palavra secreta?</h1>
        <h3>
          Nossa dica é: <strong>{pickedCategory}</strong>
        </h3>
        <p>Sua pontuação até o momento: {score}</p>
        <p>Tentativas: {guesses}</p>
      </S.Header>

      <S.WordContent>
        {!!letters &&
          letters.map((letter, i) =>
            guessedLetters.includes(letter) ? (
              <S.LetterWrap key={i}>{letter}</S.LetterWrap>
            ) : (
              <S.LetterWrap key={i}></S.LetterWrap>
            )
          )}
      </S.WordContent>

      <S.FormGroup onSubmit={handleSubmit}>
        <S.InputGroup>
          <input
            type="text"
            name="letter"
            id="letter"
            placeholder="Qual letra essa palavra tem?"
            maxLength={1}
            required
            autoFocus
            onChange={(evt) => setLetter(evt.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button type="submit">
            <PaperPlaneRight size={20} weight="bold" />
          </button>
        </S.InputGroup>
      </S.FormGroup>

      <S.Footer>
        <p>Você já utilizou as letras:</p>
        {!!wrongLetters &&
          wrongLetters.map((letter) => <span key={letter}>{letter}</span>)}
      </S.Footer>
    </S.Display>
  );
};

export default Game;
