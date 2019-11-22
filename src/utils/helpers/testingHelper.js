/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { render, act, fireEvent, cleanup } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

const customRender = component => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

export { customRender as render, act, fireEvent, cleanup };
