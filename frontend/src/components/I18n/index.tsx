import React, { useState } from "react";
import Emoji from "react-emoji-render";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga";

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

import Palettes from "../../themes";
import { Language, BlobLocation, LanguageItems } from "../../resources/enums";

import { I18nProps } from "./types";
import { Palette } from "../../themes/types";

const I18n: React.FC<I18nProps> = props => {
  const [t, i18n] = useTranslation();
  const [language, setLanguage] = useState(Language.br);

  function toggleLanguage(newLang: Language) {
    if (language === newLang) return;

    ReactGA.event({
      category: "I18n",
      action: "Changed Language",
      label: newLang
    });

    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  }

  function changePalette(value: string) {
    ReactGA.event({
      category: "Theme",
      action: "Changed Palette",
      label: value
    });

    props.shuffleTheme(Palettes[parseInt(value, 10)]);
  }

  return (
    <Container
      about={BlobLocation.topRight.toString()}
      slot={BlobLocation.middle.toString()}
      autoCorrect={BlobLocation.smallMiddle.toString()}
    >
      <I18nContainer>
        <Button
          onClick={() => toggleLanguage(Language.br)}
          style={{
            borderBottom:
              language === Language.br
                ? `3px solid ${props.currentPalette.Color3}`
                : 0
          }}
        >
          <Emoji text=":flag_brazil:" onlyEmojiClassName="make-emojis-large" />
        </Button>
        <Button
          onClick={() => toggleLanguage(Language.en)}
          style={{
            borderBottom:
              language === Language.en
                ? `3px solid ${props.currentPalette.Color3}`
                : 0
          }}
        >
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
        <PaletteSelect
          value={-1}
          onChange={e => changePalette(e?.target.value)}
        >
          <PaletteSelectOption key={-1} value={-1}>
            ?-?
          </PaletteSelectOption>
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
