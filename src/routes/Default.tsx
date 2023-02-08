import { Home } from "page";
import { Route, Routes } from "react-router-dom";
import Protected from "./Protected";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="game"
        element={
          <Protected isSignedIn={false}>
            <h1>Game</h1>
          </Protected>
        }
      />
      <Route
        path="end"
        element={
          <Protected isSignedIn={false}>
            <h1>End</h1>
          </Protected>
        }
      />
    </Routes>
  );
};

export default Router;
