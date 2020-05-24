import styled from "styled-components/native";
import { Dimensions } from "react-native";

import { ExperienceProps } from "./types";

export const ExperienceArea = styled.View`
  flex-direction: column;

  background-color: ${(props: any) => props.theme.Color2};
  border-radius: 50px;

  width: ${Dimensions.get("window").width - 30}px;

  margin-bottom: 20px;
  padding: 15px;
`;

export const ExperienceTitleRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ExperienceTitleArea = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 3px 10px;
`;

export const ExperienceDescriptionArea = styled.View`
  width: 100%;

  padding: 10px;
`;

export const ExperienceTitleText = styled.Text`
  font-family: "Jost-Bold";
  font-size: 24px;
`;

export const ExperienceDurationText = styled.Text`
  font-family: "Jost-Medium";
  font-size: 16px;
`;

export const ExperienceDescriptionText = styled.Text`
  font-family: "OpenSans-Regular";
  font-size: 18px;
  text-align: justify;

  color: ${(props: any) => props.theme.Color4};
`;
