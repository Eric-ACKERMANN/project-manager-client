import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
