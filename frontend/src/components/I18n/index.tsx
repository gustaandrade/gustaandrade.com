import React from "react";
import Emoji from "react-emoji-render";
import { useTranslation } from "react-i18next";

import { Container, Button } from "./styles";

import { generateRandomBlob } from "../../helpers/blob";

import { Language } from "../../resources/enums";

const I18n = () => {
  const [t, i18n] = useTranslation();

  return (
    <Container className={generateRandomBlob()}>
      <Button onClick={() => i18n.changeLanguage(Language.br)}>
        <Emoji text=":flag_brazil:" onlyEmojiClassName="make-emojis-large" />
      </Button>
      <Button onClick={() => i18n.changeLanguage(Language.en)}>
        <Emoji
          text=":flag_united_states:"
          onlyEmojiClassName="make-emojis-large"
        />
      </Button>
    </Container>
  );
};

export default I18n;
