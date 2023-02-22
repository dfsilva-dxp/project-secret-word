import { useContext } from "react";

import { GameContext } from "context/gameContext";

const useGame = () => useContext(GameContext);

export default useGame;
