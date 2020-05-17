import React from "react";
import { useTranslation } from "react-i18next";

import { Container } from "./styles";

import { LanguageItems, BlobLocation } from "../../resources/enums";
import { generateRandomBlob } from "../../helpers/blob";

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
