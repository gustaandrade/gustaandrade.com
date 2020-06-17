import styled from "styled-components/native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";

import { ProfileProps } from "./types";

export const Container = styled.View`
  flex: 1;

  background-color: ${(props: ProfileProps) => props.theme.Color1};

  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const ProfileArea = styled.View`
  flex: 0.1;
  flex-direction: row;
  align-items: center;

  background-color: ${(props: ProfileProps) => props.theme.Color2};
  border-radius: 50px;

  margin: 0 15px 0 15px;
  padding: 10px;
`;

export const AvatarArea = styled.View`
  align-items: flex-start;

  width: 20%;
  padding-left: 10px;
`;

export const DescriptionArea = styled.View`
  align-items: flex-end;

  width: 80%;
  padding-right: 20px;
`;

export const DescriptionRow = styled.View`
  flex-direction: row;
`;

export const SpecialtiesArea = styled.View`
  flex: 0.4;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: ${(props: ProfileProps) => props.theme.Color2};

  border-radius: 50px;

  margin: 15px 15px 0 15px;
  padding: 15px;
`;

export const SpecialtiesRow = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;

  margin: 5px 0;
`;

export const SpecialtiesColumn = styled.View`
  flex-direction: column;

  width: 33%;

  margin: 5px 0;
`;

export const SpecialtiesIcon = styled.View`
  flex-direction: row;
  align-items: center;

  height: 36px;
`;

export const SpecialtiesIconLeft = styled.View`
  align-items: center;

  width: 30%;
`;

export const SpecialtiesIconRight = styled.View`
  width: 70%;
`;

export const SocialArea = styled.View`
  flex: 0.6;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: ${(props: ProfileProps) => props.theme.Color2};

  border-radius: 50px;

  margin: 15px;
  padding: 15px;
`;

export const SocialButton = styled.TouchableOpacity`
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  border: 3px;
  border-color: ${(props: ProfileProps) => props.theme.Color3};
  border-radius: 50px;

  width: 100%;
  height: 60px;

  margin: 0px 15px;
`;

export const SocialIcon = styled.View`
  align-items: flex-end;
  width: 65px;
  padding-right: 15px;
`;

export const SocialText = styled.Text`
  font-family: "Jost-Bold";
  font-size: 20px;

  color: ${(props: ProfileProps) => props.theme.Color4};
`;

export const AvatarImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const ProfileName = styled.Text`
  font-family: "Jost-Bold";
  font-size: 20px;
  color: ${(props: ProfileProps) => props.theme.Color4};
`;

export const ProfileUsername = styled.Text`
  font-family: "Jost-Bold";
  font-size: 20px;
  color: ${(props: ProfileProps) => props.theme.Color3};
`;

export const SpecialtiesTitle = styled.Text`
  font-family: "Jost-Medium";
  font-size: 18px;

  color: ${(props: ProfileProps) => props.theme.Color4};
`;

export const SpecialtiesText = styled.Text`
  font-family: "OpenSans-Regular";
  font-size: 14px;
  color: ${(props: ProfileProps) => props.theme.Color4};

  padding-left: 5px;
`;
