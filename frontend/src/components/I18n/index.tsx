import React from "react";
import Emoji from "react-emoji-render";
import { useTranslation } from "react-i18next";

import { Container, Button } from "./styles";

import { generateRandomBlob } from "../../helpers/blob";

import { Language, BlobLocation } from "../../resources/enums";

import { I18nProps } from "../../i18n/types";

const I18n: React.FC<I18nProps> = props => {
  const [t, i18n] = useTranslation();

  function toggleLanguage(language: Language) {
    i18n.changeLanguage(language);
    props.shuffleTheme();
  }

  return (
    <Container className={generateRandomBlob(BlobLocation.topRight)}>
      <Button onClick={() => toggleLanguage(Language.br)}>
        <Emoji text=":flag_brazil:" onlyEmojiClassName="make-emojis-large" />
      </Button>
      <Button onClick={() => toggleLanguage(Language.en)}>
        <Emoji
          text=":flag_united_states:"
          onlyEmojiClassName="make-emojis-large"
        />
      </Button>
    </Container>
  );
};

export default I18n;
