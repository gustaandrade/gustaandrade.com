import styled from "styled-components/native";
import Constants from "expo-constants";

import { ExperiencesProps } from "./types";

export const Container = styled.View`
  flex: 1;

  background-color: ${(props: ExperiencesProps) => props.theme.Color1};
`;

export const ExperiencesScrollArea = styled.SafeAreaView`
  flex: 1;
  align-items: center;

  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const ExperiencesScroll = styled.ScrollView``;

export const ExperienceTitle = styled.Text`
  font-family: "Jost-Bold";
  font-size: 20px;
  text-align: center;

  margin: 10px 0 20px 0;
`;
