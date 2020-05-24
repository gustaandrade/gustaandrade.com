import styled from "styled-components/native";
import { Dimensions } from "react-native";

import { ProjectProps } from "./types";

export const ProjectArea = styled.TouchableOpacity`
  flex-direction: column;

  background-color: ${(props: any) => props.theme.Color2};
  border-radius: 50px;

  width: ${Dimensions.get("window").width - 50}px;

  margin-bottom: 20px;
  padding: 15px;
`;

export const ProjectTitleArea = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 0 10px;
`;

export const ProjectTitleIconArea = styled.View`
  width: 20%;
`;

export const ProjectTitleTextArea = styled.View`
  width: 80%;
`;

export const ProjectDescriptionArea = styled.View`
  width: 100%;

  padding: 10px;
`;

export const ProjectTitleText = styled.Text`
  font-family: "Jost-Bold";
  font-size: 20px;
`;

export const ProjectDescriptionText = styled.Text`
  font-family: "OpenSans-Regular";
  font-size: 18px;
  text-align: justify;

  color: ${(props: any) => props.theme.Color4};
`;
