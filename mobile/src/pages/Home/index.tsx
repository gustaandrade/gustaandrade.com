import React from "react";
import { Image } from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { withTheme } from "styled-components";
import { useTranslation } from "react-i18next";

import i18n from "../../i18n";

import {
  Container,
  ProfileArea,
  AvatarImage,
  DescriptionArea,
  ProfileName,
  ProfileUsername,
  ProfileOccupation,
  SocialArea,
  SocialButton,
  SocialText,
  SocialIcon,
  SpecialtiesArea,
  SpecialtiesRow,
  SpecialtiesText,
  SpecialtiesIcon,
  SpecialtiesTitle,
  RandomButton
} from "./styles";

import { LanguageItems } from "../../resources/enums";
import { HomeProps } from "./types";

const Home: React.FC<HomeProps> = props => {
  const [t] = useTranslation(undefined, { i18n });

  const openURL = (url: string) => {
    Linking.openURL(url);
  };

  const shuffleTheme = () => {
    if (props.changeCustomTheme) props.changeCustomTheme();
  };

  return (
    <Container>
      <ProfileArea>
        <RandomButton onPress={() => shuffleTheme()}>
          <FontAwesome5 name="dice" size={24} color={props.theme.Color3} />
        </RandomButton>
        <AvatarImage source={require("../../assets/Avatar/avatar.png")} />

        <DescriptionArea>
          <ProfileName>Gustavo Andrade Guimarães</ProfileName>
          <ProfileUsername>@gustaandrade</ProfileUsername>
          <ProfileOccupation>{t(LanguageItems.Role)}</ProfileOccupation>
        </DescriptionArea>
      </ProfileArea>

      <SpecialtiesArea>
        <SpecialtiesRow>
          <SpecialtiesTitle>{t(LanguageItems.Specialties)}</SpecialtiesTitle>
        </SpecialtiesRow>

        <SpecialtiesRow>
          <SpecialtiesIcon>
            <MaterialCommunityIcons
              name="language-javascript"
              size={60}
              color={props.theme.Color3}
            />
            <SpecialtiesText>JavaScript</SpecialtiesText>
          </SpecialtiesIcon>

          <SpecialtiesIcon>
            <MaterialCommunityIcons
              name="language-typescript"
              size={60}
              color={props.theme.Color3}
            />
            <SpecialtiesText>TypeScript</SpecialtiesText>
          </SpecialtiesIcon>

          <SpecialtiesIcon>
            <Image
              source={require("../../assets/Icons/csharp.png")}
              style={{ tintColor: props.theme.Color3, width: 60, height: 60 }}
            />
            <SpecialtiesText>C#</SpecialtiesText>
          </SpecialtiesIcon>
        </SpecialtiesRow>

        <SpecialtiesRow>
          <SpecialtiesIcon>
            <FontAwesome5 name="react" size={60} color={props.theme.Color3} />
            <SpecialtiesText>React</SpecialtiesText>
          </SpecialtiesIcon>

          <SpecialtiesIcon>
            <FontAwesome5 name="android" size={60} color={props.theme.Color3} />
            <SpecialtiesText>Mobile</SpecialtiesText>
          </SpecialtiesIcon>

          <SpecialtiesIcon>
            <MaterialCommunityIcons
              name="nodejs"
              size={60}
              color={props.theme.Color3}
            />
            <SpecialtiesText>NodeJS</SpecialtiesText>
          </SpecialtiesIcon>

          <SpecialtiesIcon>
            <MaterialCommunityIcons
              name="unity"
              size={60}
              color={props.theme.Color3}
            />
            <SpecialtiesText>Unity</SpecialtiesText>
          </SpecialtiesIcon>

          <SpecialtiesIcon>
            <Image
              source={require("../../assets/Icons/scrum.png")}
              style={{ tintColor: props.theme.Color3, width: 60, height: 60 }}
            />
            <SpecialtiesText>Scrum</SpecialtiesText>
          </SpecialtiesIcon>
        </SpecialtiesRow>
      </SpecialtiesArea>

      <SocialArea>
        <SocialButton
          onPress={() => openURL("mailto:oi@gustavoandrade.design")}
        >
          <SocialIcon>
            <FontAwesome5 name="at" size={36} color={props.theme.Color3} />
          </SocialIcon>
          <SocialText>oi@gustavoandrade.design</SocialText>
        </SocialButton>

        <SocialButton onPress={() => openURL("https://bit.ly/gusta_linkedin")}>
          <SocialIcon>
            <FontAwesome5
              name="linkedin"
              size={36}
              color={props.theme.Color3}
            />
          </SocialIcon>
          <SocialText>/gustaandrade</SocialText>
        </SocialButton>

        <SocialButton onPress={() => openURL("https://bit.ly/gusta_github")}>
          <SocialIcon>
            <FontAwesome5 name="github" size={36} color={props.theme.Color3} />
          </SocialIcon>
          <SocialText>/gustaandrade</SocialText>
        </SocialButton>

        <SocialButton onPress={() => openURL("https://bit.ly/gusta_curriculo")}>
          <SocialIcon>
            <FontAwesome
              name="file-pdf-o"
              size={36}
              color={props.theme.Color3}
            />
          </SocialIcon>
          <SocialText>{t(LanguageItems.Curriculum)}</SocialText>
        </SocialButton>
      </SocialArea>
    </Container>
  );
};

export default withTheme(Home);
