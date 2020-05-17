import React from "react";
import { useTranslation } from "react-i18next";

import { Container } from "./styles";

import { LanguageItems } from "../../resources/enums";

const Pill: React.FC = () => {
  const [t, i18n] = useTranslation();

  return (
    <Container>
      pill
      {/* <h1>aisd</h1> */}
    </Container>
  );
};

export default Pill;
