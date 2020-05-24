import styled from "styled-components/native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";

import { HomeProps } from "./types";

export const Container = styled.View`
  flex: 1;

  background-color: ${(props: HomeProps) => props.theme.Color1};
`;

export const ProfileArea = styled.View`
  align-items: center;

  width: ${Dimensions.get("window").width}px;
  height: 290px;

  border-bottom-left-radius: ${Dimensions.get("window").width / 6}px;
  border-bottom-right-radius: ${Dimensions.get("window").width / 6}px;

  background-color: ${(props: HomeProps) => props.theme.Color2};

  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const DescriptionArea = styled.View`
  align-items: center;
`;

export const SpecialtiesArea = styled.View`
  flex: 0.55;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props: HomeProps) => props.theme.Color2};

  border-radius: 50px;

  margin: 15px 15px 0 15px;
  padding: 15px;
`;

export const SpecialtiesRow = styled.View`
  flex-direction: row;
  align-items: baseline;

  margin: 5px 0;
`;

export const SpecialtiesIcon = styled.View`
  flex-direction: column;
  align-items: center;

  margin: 0 4px;
`;

export const SocialArea = styled.View`
  flex: 0.45;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: ${(props: HomeProps) => props.theme.Color2};

  border-radius: 50px;

  margin: 15px;
  padding: 15px;
`;

export const SocialButton = styled.TouchableOpacity`
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  border: 3px;
  border-color: ${(props: HomeProps) => props.theme.Color3};
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
`;

export const AvatarImage = styled.Image`
  width: 125px;
  height: 125px;
`;

export const ProfileName = styled.Text`
  font-family: "Jost-Bold";
  font-size: 26px;
  color: ${(props: HomeProps) => props.theme.Color4};
`;

export const ProfileUsername = styled.Text`
  font-family: "Jost-Bold";
  font-size: 22px;
  color: ${(props: HomeProps) => props.theme.Color3};
`;

export const ProfileOccupation = styled.Text`
  font-family: "OpenSans-Regular";
  font-size: 18px;
  color: ${(props: HomeProps) => props.theme.Color4};

  margin-top: 20px;
`;

export const SpecialtiesTitle = styled.Text`
  font-family: "Jost-Medium";
  font-size: 18px;

  color: ${(props: HomeProps) => props.theme.Color4};
`;

export const SpecialtiesText = styled.Text`
  font-family: "OpenSans-Regular";
  font-size: 14px;
  color: ${(props: HomeProps) => props.theme.Color4};
`;

export const RandomButton = styled.TouchableOpacity`
  position: absolute;
  right: 25px;
  top: ${Constants.statusBarHeight + 25}px;

  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;

  border-radius: 100px;
  background-color: ${(props: HomeProps) => props.theme.Color2};
  border-color: ${(props: HomeProps) => props.theme.Color3};
  border-width: 3px;

  elevation: 10;
`;
