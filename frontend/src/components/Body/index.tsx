import React from "react";
import { useTranslation } from "react-i18next";

import Pill from "../Pill";

import { Container } from "./styles";

import { LanguageItems } from "../../resources/enums";

const Body: React.FC = () => {
  const [t, i18n] = useTranslation();

  return (
    <Container>
      <Pill />
      <Pill />
      <Pill />
      <Pill />
      <Pill />
      <Pill />
    </Container>
  );
};

export default Body;
