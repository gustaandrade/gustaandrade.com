import React from "react";
import { useTranslation } from "react-i18next";

import Pill from "../Pill";

import { Container, PillsArea, RecentProjects } from "./styles";

import { LanguageItems, PillIcon } from "../../resources/enums";

const Body: React.FC = () => {
  const [t] = useTranslation();

  return (
    <Container>
      <RecentProjects>{t(LanguageItems.RecentProjects)}</RecentProjects>
      <PillsArea>
        <Pill
          title="insomnia-plugin-random-cnpj"
          url="https://github.com/gustaandrade/insomnia-plugin-random-cnpj"
          icon={PillIcon.npm}
          description={t(LanguageItems.FirstProject)}
        />

        <Pill
          title="gamedev4noobs"
          url="https://github.com/gustaandrade/gamedev4noobs"
          icon={PillIcon.github}
          description={t(LanguageItems.SecondProject)}
        />

        <Pill
          title="gustaandrade.com"
          url="https://github.com/gustaandrade/gustaandrade.com"
          icon={PillIcon.mobile}
          description={t(LanguageItems.ThirdProject)}
        />

        <Pill
          title="gitstories"
          url="https://github.com/gustaandrade/gitstories"
          icon={PillIcon.react}
          description={t(LanguageItems.FourthProject)}
        />

        <Pill
          title="tomb-keeper"
          url="https://github.com/gustaandrade/global-game-jam-2020"
          icon={PillIcon.unity}
          description={t(LanguageItems.FifthProject)}
        />

        <Pill
          title="star-picross"
          url="https://github.com/gustaandrade/"
          icon={PillIcon.mobile}
          description={t(LanguageItems.SixthProject)}
        />
      </PillsArea>
    </Container>
  );
};

export default Body;
