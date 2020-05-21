import styled from "styled-components/native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;

  background-color: ${(props: any) => props.theme.Color1};
`;

export const ProfileArea = styled.View`
  width: ${Dimensions.get("window").width}px;
  height: 300px;

  border-bottom-left-radius: ${Dimensions.get("window").width / 2}px;
  border-bottom-right-radius: ${Dimensions.get("window").width / 2}px;

  background-color: ${(props: any) => props.theme.Color2};

  padding-top: ${Constants.statusBarHeight + 30}px;
`;

export const AvatarArea = styled.View`
  flex: 1;
  align-items: center;
`;

export const DescriptionArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SocialArea = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  width: 90%;

  margin-top: 10px;
`;

export const SocialColumn = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 0 8px;
`;

export const AvatarImage = styled.Image`
  width: 125px;
  height: 125px;
`;

export const ProfileName = styled.Text`
  font-family: "Jost-Bold";
  font-size: 26px;
  color: ${(props: any) => props.theme.Color4};
`;

export const ProfileUsername = styled.Text`
  font-family: "Jost-Bold";
  font-size: 22px;
  color: ${(props: any) => props.theme.Color3};
`;

export const ProfileOccupation = styled.Text`
  font-family: "OpenSans-Regular";
  font-size: 16px;
  font-weight: 500;
  color: ${(props: any) => props.theme.Color4};

  margin-top: 20px;
`;

export const SocialIcon = styled.Image`
  width: 30px;
  height: 30px;

  margin: 0 5px;

  fill: ${(props: any) => props.theme.Color3};
`;

export const SocialLink = styled.Button`
  display: flex;
  align-items: center;

  font-family: "Jost-Bold";
  font-size: 12px;
  color: ${(props: any) => props.theme.Color4};

  text-decoration: none;

  margin: 2.5px 0;
`;
