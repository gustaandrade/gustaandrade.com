import React from "react";
import { useTranslation } from "react-i18next";

import {
  Container,
  ProfileArea,
  AvatarArea,
  DescriptionArea,
  AvatarImage,
  ProfileName,
  ProfileUsername,
  ProfileOccupation
} from "./styles";

import Avatar from "../../assets/avatar.png";

import { generateRandomBlob } from "../../helpers/blob";

import { LanguageItems, BlobLocation } from "../../resources/enums";

const Profile: React.FC = () => {
  const [t, i18n] = useTranslation();

  return (
    <Container>
      <ProfileArea about={generateRandomBlob(BlobLocation.topLeft)}>
        <AvatarArea>
          <AvatarImage src={Avatar} alt="Avatar" />

          <DescriptionArea>
            <ProfileName>Gustavo Andrade Guimarães</ProfileName>
            <ProfileUsername>@gustaandrade</ProfileUsername>
            <ProfileOccupation>{t(LanguageItems.WebRole)} &</ProfileOccupation>
            <ProfileOccupation>{t(LanguageItems.GameRole)}</ProfileOccupation>
          </DescriptionArea>
        </AvatarArea>
      </ProfileArea>
    </Container>
  );
};

export default Profile;
