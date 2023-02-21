import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, MyTheme } from "./styles";
import { Home } from "page";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={MyTheme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
