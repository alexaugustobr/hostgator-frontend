import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme";
import AppBar from "./components/AppBar";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    font-family: 'Montserrat', sans-serif;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppBar />
      </ThemeProvider>
    </>
  );
};

export default App;
