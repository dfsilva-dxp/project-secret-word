import { GameOver } from "components";

import useGame from "hooks/useGame";

const GameOverPage = () => {
  const { retry, score } = useGame();

  return <GameOver retry={retry} score={score} />;
};

export default GameOverPage;
