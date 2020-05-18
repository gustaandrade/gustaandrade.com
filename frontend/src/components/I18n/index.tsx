import React, { useState } from "react";
import Emoji from "react-emoji-render";
import { useTranslation } from "react-i18next";

import {
  Container,
  I18nContainer,
  PaletteContainer,
  Button,
  PaletteText,
  PaletteItem,
  PaletteSelect,
  PaletteSelectOption
} from "./styles";

import { generateRandomBlob } from "../../helpers/blob";

import Palettes from "../../themes";
import { Language, BlobLocation, LanguageItems } from "../../resources/enums";

import { I18nProps } from "./types";
import { Palette } from "../../themes/types";

const I18n: React.FC<I18nProps> = props => {
  const [t, i18n] = useTranslation();
  const [language, setLanguage] = useState(Language.br);

  function toggleLanguage(newLang: Language) {
    if (language === newLang) return;

    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    props.shuffleTheme();
  }

  function changePalette(value: string) {
    props.shuffleTheme(Palettes[parseInt(value, 10)]);
  }

  return (
    <Container
      slot={generateRandomBlob(BlobLocation.middle)}
      about={generateRandomBlob(BlobLocation.topRight)}
    >
      <I18nContainer>
        <Button onClick={() => toggleLanguage(Language.br)}>
          <Emoji text=":flag_brazil:" onlyEmojiClassName="make-emojis-large" />
        </Button>
        <Button onClick={() => toggleLanguage(Language.en)}>
          <Emoji
            text=":flag_united_states:"
            onlyEmojiClassName="make-emojis-large"
          />
        </Button>
      </I18nContainer>

      <PaletteContainer>
        <PaletteText>{t(LanguageItems.CurrentPalette)}</PaletteText>
        <PaletteItem>{props.currentPalette.name}</PaletteItem>
      </PaletteContainer>

      <PaletteContainer>
        <PaletteText>{t(LanguageItems.ChangePalette)}</PaletteText>
        <PaletteSelect onChange={e => changePalette(e?.target.value)}>
          {Palettes.map((p: Palette) => (
            <PaletteSelectOption key={p.value} value={p.value}>
              {p.name}
            </PaletteSelectOption>
          ))}
        </PaletteSelect>
      </PaletteContainer>
    </Container>
  );
};

export default I18n;
