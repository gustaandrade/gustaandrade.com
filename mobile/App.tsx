import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Enumerable from "linq";

import Routes from "./src/routes";
import Palettes from "./src/themes";

import { getRandomIntBetween } from "./src/helpers/random";
import { Palette } from "./src/themes/types";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

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

  const fetchFonts = () => {
    return Font.loadAsync({
      "Jost-Light": require("./assets/fonts/Jost/Jost-Light.ttf"),
      "Jost-Medium": require("./assets/fonts/Jost/Jost-Medium.ttf"),
      "Jost-Bold": require("./assets/fonts/Jost/Jost-Bold.ttf"),
      "OpenSans-Light": require("./assets/fonts/Open_Sans/OpenSans-Light.ttf"),
      "OpenSans-Regular": require("./assets/fonts/Open_Sans/OpenSans-Regular.ttf"),
      "OpenSans-Bold": require("./assets/fonts/Open_Sans/OpenSans-Bold.ttf")
    });
  };

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }

  return (
    <ThemeProvider theme={randomTheme ? randomTheme : startPalette}>
      <Routes />
    </ThemeProvider>
  );
}
