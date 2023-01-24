import { ThemeProvider } from "styled-components";

import { Home } from "page";

import { GlobalStyle, MyTheme } from "./styles";

const App = () => {
  return (
    <ThemeProvider theme={MyTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
