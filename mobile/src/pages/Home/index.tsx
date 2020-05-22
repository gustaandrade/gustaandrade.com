import React from "react";
import { Image } from "react-native";
import { withTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

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
  SpecialtiesTitle
} from "./styles";

import i18n from "../../i18n";

import { LanguageItems } from "../../resources/enums";
import { HomeProps } from "./types";

const Home: React.FC<HomeProps> = props => {
  const [t] = useTranslation(undefined, { i18n });

  return (
    <Container>
      <ProfileArea>
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
              size={64}
              color={props.theme.Color3}
            />
            <SpecialtiesText>JavaScript</SpecialtiesText>
          </SpecialtiesIcon>

          <SpecialtiesIcon>
            <MaterialCommunityIcons
              name="language-typescript"
              size={64}
              color={props.theme.Color3}
            />
            <SpecialtiesText>TypeScript</SpecialtiesText>
          </SpecialtiesIcon>

          <SpecialtiesIcon>
            <MaterialCommunityIcons
              name="language-csharp"
              size={64}
              color={props.theme.Color3}
            />
            <SpecialtiesText>C#</SpecialtiesText>
          </SpecialtiesIcon>
        </SpecialtiesRow>

        <SpecialtiesRow>
          <SpecialtiesIcon>
            <MaterialCommunityIcons
              name="react"
              size={64}
              color={props.theme.Color3}
            />
            <SpecialtiesText>React</SpecialtiesText>
          </SpecialtiesIcon>

          <SpecialtiesIcon>
            <MaterialCommunityIcons
              name="android"
              size={64}
              color={props.theme.Color3}
            />
            <SpecialtiesText>Mobile</SpecialtiesText>
          </SpecialtiesIcon>

          <SpecialtiesIcon>
            <MaterialCommunityIcons
              name="nodejs"
              size={64}
              color={props.theme.Color3}
            />
            <SpecialtiesText>NodeJS</SpecialtiesText>
          </SpecialtiesIcon>

          <SpecialtiesIcon>
            <MaterialCommunityIcons
              name="unity"
              size={64}
              color={props.theme.Color3}
            />
            <SpecialtiesText>Unity</SpecialtiesText>
          </SpecialtiesIcon>

          <SpecialtiesIcon>
            <Image
              source={require("../../assets/Icons/scrum.png")}
              style={{ tintColor: props.theme.Color3, width: 64, height: 64 }}
            />
            <SpecialtiesText>Scrum</SpecialtiesText>
          </SpecialtiesIcon>
        </SpecialtiesRow>
      </SpecialtiesArea>

      <SocialArea>
        <SocialButton>
          <SocialIcon>
            <FontAwesome5 name="at" size={40} color={props.theme.Color3} />
          </SocialIcon>
          <SocialText>oi@gustavoandrade.design</SocialText>
        </SocialButton>

        <SocialButton>
          <SocialIcon>
            <FontAwesome5
              name="linkedin"
              size={40}
              color={props.theme.Color3}
            />
          </SocialIcon>
          <SocialText>/gustaandrade</SocialText>
        </SocialButton>

        <SocialButton>
          <SocialIcon>
            <FontAwesome5 name="github" size={40} color={props.theme.Color3} />
          </SocialIcon>
          <SocialText>/gustaandrade</SocialText>
        </SocialButton>

        <SocialButton>
          <SocialIcon>
            <FontAwesome5
              name="file-pdf"
              size={40}
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
