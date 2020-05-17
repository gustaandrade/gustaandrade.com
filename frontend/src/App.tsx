import React, { useState, useEffect } from "react";
import Enumerable from "linq";
import { ThemeProvider } from "styled-components";

import Profile from "./components/Profile";
import I18n from "./components/I18n";

import Palettes, { Palette4H } from "./themes";
import { Container } from "./resources/styles";

import { getRandomIntBetween } from "./helpers/random";

import "./App.css";

function App() {
  const startPalette = Enumerable.from(Palettes).shuffle().toArray()[0];
  const [randomTheme, setRandomTheme] = useState(startPalette);

  const shuffleNewTheme = () => {
    setRandomTheme(
      Enumerable.from(Palettes)
        .shuffle()
        .firstOrDefault(
          p => p.value === getRandomIntBetween(0, Palettes.length)
        )
    );
  };

  useEffect(() => shuffleNewTheme(), []);

  return (
    <ThemeProvider theme={randomTheme ? randomTheme : startPalette}>
      <Container>
        <Profile />
        <I18n shuffleTheme={shuffleNewTheme} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
