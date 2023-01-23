import { ThemeProvider } from "styled-components";

import { GlobalStyle, MyTheme } from "./styles";

const App = () => {
  return (
    <ThemeProvider theme={MyTheme}>
      <h1>App</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
