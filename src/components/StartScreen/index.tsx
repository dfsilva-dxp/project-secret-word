import { GameController } from "phosphor-react";

import Button from "components/Button";

import * as S from "./styles";

import { StartScreenProps } from "./type";

const StartScreen = ({ handleStarGame }: StartScreenProps) => {
  return (
    <S.Wrap>
      <h1>Secret Word</h1>
      <p>Vamos começar a jogar?</p>
      <Button onClick={handleStarGame}>
        Jogar <GameController size={20} weight="bold" />
      </Button>
    </S.Wrap>
  );
};

export default StartScreen;
