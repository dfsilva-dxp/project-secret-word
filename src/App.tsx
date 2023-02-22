import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import { MyRoutes } from "routes";

import { GameProvider } from "context/gameContext";

import { GlobalStyle, MyTheme } from "./styles";

const App = () => {
  return (
    <BrowserRouter>
      <GameProvider>
        <ThemeProvider theme={MyTheme}>
          <MyRoutes />
          <ToastContainer autoClose={2500} />
          <GlobalStyle />
        </ThemeProvider>
      </GameProvider>
    </BrowserRouter>
  );
};

export default App;
