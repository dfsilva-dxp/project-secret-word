import { GameController } from "phosphor-react";

import Button from "components/Button";

import * as S from "./styles";

import { GameOverProps } from "./gameOver";

import gameOverImage from "assets/img/svg/game-over.svg";

const GameOver = ({ retry, score }: GameOverProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <h1>Game over!</h1>
        <p>
          Score <strong>{score}</strong>
        </p>
      </S.Header>
      <img
        src={gameOverImage}
        alt="Imagem vetor de um homem sentado em uma poltrona puff verde, com um controle de vídeo game nas mãos, olhando para uma tela escrito start e um vídeo game abaixo."
        title="Imagem vetor de um homem sentado em uma poltrona puff verde, com um controle de vídeo game nas mãos, olhando para uma tela escrito start e um vídeo game abaixo."
      />
      <Button onClick={retry}>
        Novo Jogo <GameController size={20} weight="bold" />
      </Button>
    </S.Wrapper>
  );
};

export default GameOver;
