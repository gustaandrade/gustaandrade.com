import React, { useState, useEffect } from "react";
import Enumerable from "linq";
import { ThemeProvider } from "styled-components";

import Profile from "./components/Profile";
import I18n from "./components/I18n";

import Palettes, { Palette4H } from "./themes";

import "./App.css";
import { getRandomIntBetween } from "./helpers/random";

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
      <div className="container">
        <Profile />
        <I18n />
      </div>
    </ThemeProvider>
  );
}

export default App;
