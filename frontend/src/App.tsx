import React, { useState, useEffect } from "react";
import Enumerable from "linq";
import { ThemeProvider } from "styled-components";

import Profile from "./components/Profile";
import I18n from "./components/I18n";

import Palettes, { Palette4H } from "./themes";
import { Container } from "./styles";

import { getRandomIntBetween } from "./helpers/random";

import "./App.css";

function App() {
  const [randomTheme, setRandomTheme] = useState(Palette4H);
  useEffect(() => {
    setRandomTheme(
      Enumerable.from(Palettes).firstOrDefault(
        p => p.value === getRandomIntBetween(0, Palettes.length)
      )
    );
  }, []);

  return (
    <ThemeProvider theme={randomTheme ? randomTheme : Palette4H}>
      <Container>
        <Profile />
        <I18n />
      </Container>
    </ThemeProvider>
  );
}

export default App;
