import React from "react";
import * as Linking from "expo-linking";
import { withTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import Emoji from "react-native-emoji";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Fontisto
} from "@expo/vector-icons";
import * as Analytics from "expo-firebase-analytics";

import i18n from "../../i18n";

import {
  Container,
  ProfileArea,
  AvatarArea,
  DescriptionArea,
  DescriptionRow,
  AvatarImage,
  ProfileName,
  ProfileUsername,
  SocialArea,
  SocialButton,
  SocialText,
  SocialIcon,
  SpecialtiesArea,
  SpecialtiesRow,
  SpecialtiesColumn,
  SpecialtiesText,
  SpecialtiesIcon,
  SpecialtiesTitle,
  SpecialtiesIconLeft,
  SpecialtiesIconRight
} from "./styles";

import { LanguageItems, Language } from "../../resources/enums";
import { ProfileProps } from "./types";

const Profile: React.FC<ProfileProps> = props => {
  const [t] = useTranslation(undefined, { i18n });

  const openURL = async (url: string, origin: string) => {
    await Analytics.logEvent("SocialButtonClicked", {
      name: origin,
      screen: "Profile"
    });

    Linking.openURL(url);
  };

  return (
    <Container>
      <ProfileArea>
        <AvatarArea>
          <AvatarImage
            source={require("../../assets/Avatar/avatar-minimalist.png")}
          />
        </AvatarArea>

        <DescriptionArea>
          <DescriptionRow>
            <ProfileName>Gustavo - </ProfileName>
            <ProfileUsername>@gustaandrade</ProfileUsername>
          </DescriptionRow>

          <DescriptionRow>
            <ProfileName>{t(LanguageItems.ProfileDescription)}</ProfileName>
          </DescriptionRow>
        </DescriptionArea>
      </ProfileArea>

      <SpecialtiesArea>
        <SpecialtiesRow>
          <SpecialtiesTitle>{t(LanguageItems.Knowledges)}</SpecialtiesTitle>
        </SpecialtiesRow>

        <SpecialtiesRow>
          <SpecialtiesColumn>
            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <MaterialCommunityIcons
                  name="angular"
                  size={30}
                  color={props.theme.Color3}
                />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>Angular</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>

            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <MaterialCommunityIcons
                  name="git"
                  size={30}
                  color={props.theme.Color3}
                />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>Git</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>

            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <Fontisto name="redux" size={26} color={props.theme.Color3} />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>Redux</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>

            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <Emoji name="nail_care" style={{ fontSize: 28 }} />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>styled</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>

            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <FontAwesome5
                  name="sass"
                  size={24}
                  color={props.theme.Color3}
                />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>Sass</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>

            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <MaterialCommunityIcons
                  name="cards-playing-outline"
                  size={30}
                  color={props.theme.Color3}
                />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>Jest</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>
          </SpecialtiesColumn>

          <SpecialtiesColumn>
            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <FontAwesome5
                  name="vuejs"
                  size={30}
                  color={props.theme.Color3}
                />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>Vue</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>

            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <MaterialCommunityIcons
                  name="graphql"
                  size={30}
                  color={props.theme.Color3}
                />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>GraphQL</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>

            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <MaterialCommunityIcons
                  name="firebase"
                  size={30}
                  color={props.theme.Color3}
                />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>Firebase</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>

            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <MaterialCommunityIcons
                  name="elephant"
                  size={30}
                  color={props.theme.Color3}
                />
              </SpecialtiesIconLeft>

              <SpecialtiesText>PostgreSQL</SpecialtiesText>
              <SpecialtiesIconRight></SpecialtiesIconRight>
            </SpecialtiesIcon>

            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <MaterialCommunityIcons
                  name="cat"
                  size={30}
                  color={props.theme.Color3}
                />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>Nest</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>

            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <FontAwesome5
                  name="docker"
                  size={24}
                  color={props.theme.Color3}
                />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>Docker</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>
          </SpecialtiesColumn>

          <SpecialtiesColumn>
            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <Fontisto
                  name="unreal-engine"
                  size={28}
                  color={props.theme.Color3}
                />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>Unreal</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>

            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <FontAwesome5
                  name="database"
                  size={26}
                  color={props.theme.Color3}
                />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>SQL</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>

            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <MaterialCommunityIcons
                  name="bootstrap"
                  size={30}
                  color={props.theme.Color3}
                />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>Bootstrap</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>

            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <FontAwesome5
                  name="wordpress"
                  size={28}
                  color={props.theme.Color3}
                />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>Wordpress</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>

            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <FontAwesome5
                  name="apple"
                  size={30}
                  color={props.theme.Color3}
                />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>iOS</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>

            <SpecialtiesIcon>
              <SpecialtiesIconLeft>
                <FontAwesome5
                  name="adobe"
                  size={28}
                  color={props.theme.Color3}
                />
              </SpecialtiesIconLeft>

              <SpecialtiesIconRight>
                <SpecialtiesText>Adobe</SpecialtiesText>
              </SpecialtiesIconRight>
            </SpecialtiesIcon>
          </SpecialtiesColumn>
        </SpecialtiesRow>
      </SpecialtiesArea>

      <SocialArea>
        <SpecialtiesRow>
          <SpecialtiesTitle>{t(LanguageItems.SocialLinks)}</SpecialtiesTitle>
        </SpecialtiesRow>

        <SocialButton
          onPress={() => openURL("https://github.com/gustaandrade", "Github")}
        >
          <SocialIcon>
            <FontAwesome5 name="github" size={36} color={props.theme.Color3} />
          </SocialIcon>
          <SocialText>/gustaandrade</SocialText>
        </SocialButton>

        <SocialButton
          onPress={() =>
            openURL("https://linkedin.com/in/gustaandrade", "Linkedin")
          }
        >
          <SocialIcon>
            <FontAwesome5
              name="linkedin"
              size={36}
              color={props.theme.Color3}
            />
          </SocialIcon>
          <SocialText>/gustaandrade</SocialText>
        </SocialButton>

        <SocialButton
          onPress={() => openURL("https://wa.me/5511943771859", "WhatsApp")}
        >
          <SocialIcon>
            <FontAwesome5
              name="whatsapp"
              size={36}
              color={props.theme.Color3}
            />
          </SocialIcon>
          <SocialText>{t(LanguageItems.Phone)}</SocialText>
        </SocialButton>

        <SocialButton
          onPress={() =>
            openURL(
              i18n.language === Language.br
                ? "https://gustavoandrade.design/GustavoAndradeGuimaraes_CV_BR.pdf"
                : "https://gustavoandrade.design/GustavoAndradeGuimaraes_CV_EN.pdf",
              "Curriculum"
            )
          }
        >
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

export default withTheme(Profile);
