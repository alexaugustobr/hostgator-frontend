import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import AppBar from "./components/AppBar";
import HostingPlans from "./containers/HostingPlans";
import { theme } from "./theme";

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
        <HostingPlans />
      </ThemeProvider>
    </>
  );
};

export default App;
