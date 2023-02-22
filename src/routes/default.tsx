import { Route, Routes } from "react-router-dom";

import { GameOverPage, GamePage, Home } from "page";

import { Base } from "template";

import ProtectedRoute from "./protected";

import useGame from "hooks/useGame";

const DefaultRoutes = () => {
  const { gameStage } = useGame();

  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route index element={<Home />} />
        <Route
          path="/game"
          element={
            <ProtectedRoute isProtected={gameStage === "game"}>
              <GamePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/end"
          element={
            <ProtectedRoute isProtected={gameStage === "end"}>
              <GameOverPage />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default DefaultRoutes;
