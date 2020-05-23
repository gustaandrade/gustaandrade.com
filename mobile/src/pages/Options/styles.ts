import styled from "styled-components/native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";

import { OptionsProps } from "./types";

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${(props: OptionsProps) => props.theme.Color1};

  padding-top: ${Constants.statusBarHeight + 50}px;
`;

export const I18nArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: ${Dimensions.get("window").width - 50}px;

  border-radius: 50px;
  background-color: ${(props: OptionsProps) => props.theme.Color2};

  padding: 10px;
  margin-bottom: 20px;
`;

export const LanguageLabelArea = styled.View`
  flex-direction: row;
  justify-content: flex-start;

  width: 35%;

  padding-left: 30px;
`;

export const FlagsArea = styled.View`
  flex-direction: row;
  justify-content: flex-end;

  width: 65%;

  padding-right: 30px;
`;

export const FlagTouchArea = styled.TouchableOpacity`
  padding-left: 30px;
`;

export const PalettesArea = styled.View`
  flex-direction: column;

  width: ${Dimensions.get("window").width - 50}px;

  border-radius: 50px;
  background-color: ${(props: OptionsProps) => props.theme.Color2};

  padding: 10px;
`;

export const PalettesRowArea = styled.View`
  flex-direction: row;
  align-items: center;

  height: 50px;
`;

export const PaletteInfoArea = styled.View`
  padding: 10px 30px;
`;

export const PalettesLabelArea = styled.View`
  flex-direction: row;
  justify-content: flex-start;

  width: 60%;

  padding-left: 30px;
`;

export const PalettesIdentifierArea = styled.View`
  flex-direction: row;
  justify-content: flex-end;

  width: 40%;

  padding-right: 10px;
`;

export const LanguageText = styled.Text`
  font-family: "Jost-Bold";
  font-size: 20px;

  color: ${(props: OptionsProps) => props.theme.Color4};
`;

export const PaletteText = styled.Text`
  font-family: "Jost-Bold";
  font-size: 20px;

  color: ${(props: OptionsProps) => props.theme.Color4};
`;

export const PaletteIdentifier = styled.Text`
  font-family: "Jost-Bold";
  font-size: 20px;

  color: ${(props: OptionsProps) => props.theme.Color3};
`;

export const PaletteInfoText = styled.Text`
  font-family: "OpenSans-Regular";
  font-size: 16px;
  text-align: justify;

  color: ${(props: OptionsProps) => props.theme.Color4};
`;
