import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme";
import AppBar from "./components/AppBar";
import Plans from "./containers/Plans";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap');
    font-family: 'Montserrat', sans-serif;
    background-color: ${theme.colors.gray[100]};
    margin: 0;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppBar />
        <Plans />
      </ThemeProvider>
    </>
  );
};

export default App;
