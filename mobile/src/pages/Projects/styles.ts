import styled from "styled-components/native";
import Constants from "expo-constants";

import { ProjectProps } from "./types";

export const Container = styled.View`
  flex: 1;

  background-color: ${(props: ProjectProps) => props.theme.Color1};
`;

export const ProjectScrollArea = styled.SafeAreaView`
  flex: 1;
  align-items: center;

  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const ProjectScroll = styled.ScrollView``;
