import styled from "styled-components/native";
import Constants from "expo-constants";
import { Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;

  background-color: ${(props: any) => props.theme.Color1};
`;

export const ProfileArea = styled.View`
  align-items: center;

  width: ${Dimensions.get("window").width}px;
  height: 290px;

  border-bottom-left-radius: ${Dimensions.get("window").width / 6}px;
  border-bottom-right-radius: ${Dimensions.get("window").width / 6}px;

  background-color: ${(props: any) => props.theme.Color2};

  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const DescriptionArea = styled.View`
  align-items: center;
`;

export const SpecialtiesArea = styled.View`
  flex: 0.45;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props: any) => props.theme.Color2};

  border-radius: 50px;

  margin: 15px;
  padding: 15px;
`;

export const SpecialtiesRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center

  margin: 5px 0;
`;

export const SpecialtiesIcon = styled.View`
  flex-direction: column;
  align-items: center;

  margin: 0 3px;
`;

export const SocialArea = styled.View`
  flex: 0.55;
  justify-content: flex-start;
`;

export const SocialButton = styled.TouchableOpacity`
  flex-direction: row;

  align-items: center;
  justify-content: flex-start;

  background-color: ${(props: any) => props.theme.Color2};
  border-radius: 25px;

  height: 50px;

  margin: 5px 15px;
`;

export const SocialIcon = styled.View`
  align-items: flex-end;
  width: 80px;
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
  color: ${(props: any) => props.theme.Color4};
`;

export const ProfileUsername = styled.Text`
  font-family: "Jost-Bold";
  font-size: 22px;
  color: ${(props: any) => props.theme.Color3};
`;

export const ProfileOccupation = styled.Text`
  font-family: "OpenSans-Regular";
  font-size: 18px;
  color: ${(props: any) => props.theme.Color4};

  margin-top: 20px;
`;

export const SpecialtiesTitle = styled.Text`
  font-family: "Jost-Medium";
  font-size: 18px;

  color: ${(props: any) => props.theme.Color4};
`;

export const SpecialtiesText = styled.Text`
  font-family: "OpenSans-Regular";
  font-size: 14px;
  color: ${(props: any) => props.theme.Color4};
`;
