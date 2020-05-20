import React, { useState, useEffect } from "react";
import Enumerable from "linq";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header";
import Body from "./components/Body";

import Palettes from "./themes";
import { Container, GlobalStyle } from "./resources/styles";

import { getRandomIntBetween } from "./helpers/random";

import "./App.css";
import { Palette } from "./themes/types";

function App() {
  const startPalette = Enumerable.from(Palettes)
    .shuffle()
    .where(p => !p.Banished)
    .toArray()[0];
  const [randomTheme, setRandomTheme] = useState(startPalette);

  const shuffleNewTheme = (theme?: Palette) => {
    if (theme) {
      setRandomTheme(
        Enumerable.from(Palettes)
          .shuffle()
          .firstOrDefault(p => p.value === theme.value)
      );
    } else {
      setRandomTheme(
        Enumerable.from(Palettes)
          .shuffle()
          .where(p => !p.Banished)
          .firstOrDefault(
            p => p.value === getRandomIntBetween(0, Palettes.length)
          )
      );
    }
  };

  useEffect(() => shuffleNewTheme(), []);

  return (
    <ThemeProvider theme={randomTheme ? randomTheme : startPalette}>
      <GlobalStyle theme={randomTheme ? randomTheme : startPalette} />
      <Container>
        <Header
          currentPalette={randomTheme ? randomTheme : startPalette}
          shuffleTheme={shuffleNewTheme}
        />
        <Body />
      </Container>
    </ThemeProvider>
  );
}

export default App;
