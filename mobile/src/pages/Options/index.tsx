import React, { useState } from "react";
import { withTheme } from "styled-components";
import Emoji from "react-native-emoji";
import { useTranslation } from "react-i18next";
import { Picker } from "@react-native-community/picker";
import Enumerable from "linq";
import * as Analytics from "expo-firebase-analytics";

import {
  Container,
  I18nArea,
  LanguageLabelArea,
  FlagsArea,
  FlagTouchArea,
  LanguageText,
  PalettesArea,
  PalettesRowArea,
  PalettesLabelArea,
  PalettesIdentifierArea,
  PaletteInfoArea,
  PaletteText,
  PaletteIdentifier,
  PaletteInfoText
} from "./styles";

import Palettes from "../../themes";

import { LanguageItems, Language } from "../../resources/enums";
import { OptionsProps } from "./types";
import { Palette } from "../../themes/types";

const Options: React.FC<OptionsProps> = props => {
  const [t, i18n] = useTranslation();
  const [currentPalette, setCurrentPalette] = useState(props.theme.value);

  const toggleLanguage = async (newLang: Language) => {
    await Analytics.logEvent("LanguageButtonClicked", {
      name: newLang,
      screen: "Options"
    });

    i18n.changeLanguage(newLang);
  };

  const togglePalette = async (paletteValue: number) => {
    const selectedPalette = Enumerable.from(Palettes).firstOrDefault(
      p => p.value === paletteValue
    );

    await Analytics.logEvent("ThemeButtonClicked", {
      name: selectedPalette.name,
      screen: "Options"
    });

    if (props.changeCustomTheme) props.changeCustomTheme(selectedPalette);
    setCurrentPalette(paletteValue);
  };

  return (
    <Container>
      <I18nArea>
        <LanguageLabelArea>
          <LanguageText>{t(LanguageItems.Language)}</LanguageText>
        </LanguageLabelArea>

        <FlagsArea>
          <FlagTouchArea onPress={() => toggleLanguage(Language.br)}>
            <Emoji
              name="flag-br"
              style={{
                fontSize: 48,
                borderBottomWidth: i18n.language === Language.br ? 3 : 0,
                borderBottomColor: props.theme.Color3
              }}
            />
          </FlagTouchArea>

          <FlagTouchArea onPress={() => toggleLanguage(Language.en)}>
            <Emoji
              name="us"
              style={{
                fontSize: 48,
                borderBottomWidth: i18n.language === Language.en ? 3 : 0,
                borderBottomColor: props.theme.Color3
              }}
            />
          </FlagTouchArea>
        </FlagsArea>
      </I18nArea>

      <PalettesArea>
        <PalettesRowArea>
          <PalettesLabelArea>
            <PaletteText>{t(LanguageItems.CurrentPalette)}</PaletteText>
          </PalettesLabelArea>

          <PalettesIdentifierArea>
            <PaletteIdentifier style={{ paddingRight: 20 }}>
              {props.theme.name}
            </PaletteIdentifier>
          </PalettesIdentifierArea>
        </PalettesRowArea>

        <PalettesRowArea>
          <PalettesLabelArea>
            <PaletteText>{t(LanguageItems.ChangePalette)}</PaletteText>
          </PalettesLabelArea>

          <PalettesIdentifierArea>
            <Picker
              selectedValue={currentPalette}
              style={{ height: 50, width: 100 }}
              onValueChange={(itemValue, itemIndex) => togglePalette(itemIndex)}
            >
              {Palettes.map((p: Palette) => (
                <Picker.Item label={p.name} value={p.value} key={p.value} />
              ))}
            </Picker>
          </PalettesIdentifierArea>
        </PalettesRowArea>

        <PaletteInfoArea>
          <PaletteInfoText>
            {t(LanguageItems.PaletteDescription)}
          </PaletteInfoText>
        </PaletteInfoArea>
      </PalettesArea>
    </Container>
  );
};

export default withTheme(Options);
