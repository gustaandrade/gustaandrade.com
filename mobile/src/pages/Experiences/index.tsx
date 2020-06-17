import React from "react";
import { withTheme } from "styled-components";
import { useTranslation } from "react-i18next";

import Experience from "../../components/Experience";
import i18n from "../../i18n";

import {
  Container,
  ExperiencesScrollArea,
  ExperiencesScroll,
  ExperienceTitle
} from "./styles";

import { ExperiencesProps } from "./types";
import { LanguageItems } from "../../resources/enums";

const Experiences: React.FC<ExperiencesProps> = props => {
  const [t] = useTranslation(undefined, { i18n });

  return (
    <Container>
      <ExperiencesScrollArea>
        <ExperiencesScroll>
          <ExperienceTitle>{t(LanguageItems.Professional)}</ExperienceTitle>

          <Experience
            title="Eshows"
            role={t(LanguageItems.FirstExperienceRole)}
            period={`${t(LanguageItems.OCT)}/2019 - ${t(
              LanguageItems.JUN
            )}/2020`}
            description={t(LanguageItems.FirstExperience)}
          />

          <Experience
            title="Fofuuu"
            role={t(LanguageItems.SecondExperienceRole)}
            period={`${t(LanguageItems.JUL)}/2017 - ${t(
              LanguageItems.OCT
            )}/2019`}
            description={t(LanguageItems.SecondExperience)}
          />

          <Experience
            title="Hospital Margarida"
            role={t(LanguageItems.ThirdExperienceRole)}
            period={`${t(LanguageItems.APR)}/2013 - ${t(
              LanguageItems.MAR
            )}/2014`}
            description={t(LanguageItems.ThirdExperience)}
          />

          <Experience
            title="Inforplay Informática"
            role={t(LanguageItems.FourthExperienceRole)}
            period={`${t(LanguageItems.OCT)}/2011 - ${t(
              LanguageItems.MAR
            )}/2013`}
            description={t(LanguageItems.FourthExperience)}
          />

          <ExperienceTitle>{t(LanguageItems.Academic)}</ExperienceTitle>

          <Experience
            title="Universidade Anhembi Morumbi - UAM"
            role={t(LanguageItems.FifthExperienceRole)}
            period={`2014 - 2019`}
            description={t(LanguageItems.FifthExperience)}
          />

          <Experience
            title="Faculdade de Informática e Administração Paulista - FIAP"
            role={t(LanguageItems.SixthExperienceRole)}
            period={`2014 - 2015`}
            description={t(LanguageItems.SixthExperience)}
          />

          <Experience
            title="Colégio e Faculdade Kennedy"
            role={t(LanguageItems.SeventhExperienceRole)}
            period={`2010 - 2011`}
            description={t(LanguageItems.SeventhExperience)}
          />
        </ExperiencesScroll>
      </ExperiencesScrollArea>
    </Container>
  );
};

export default withTheme(Experiences);
