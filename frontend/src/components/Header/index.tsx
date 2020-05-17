import React from "react";

import Profile from "../Profile";
import Specialties from "../Specialties";
import I18n from "../I18n";

import { Container } from "./styles";

import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = props => {
  return (
    <Container>
      <Profile />
      <Specialties />
      <I18n
        currentPalette={props.currentPalette}
        shuffleTheme={props.shuffleTheme}
      />
    </Container>
  );
};

export default Header;
