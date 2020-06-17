import React from "react";
import { withTheme } from "styled-components";
import { useTranslation } from "react-i18next";

import Project from "../../components/Project";
import i18n from "../../i18n";

import { Container, ProjectScrollArea, ProjectScroll } from "./styles";

import { ProjectProps } from "./types";
import { PillIcon, LanguageItems } from "../../resources/enums";

const Projects: React.FC<ProjectProps> = props => {
  const [t] = useTranslation(undefined, { i18n });

  return (
    <Container>
      <ProjectScrollArea>
        <ProjectScroll>
          <Project
            title="insomnia-plugin-random-cnpj"
            url="https://github.com/gustaandrade/insomnia-plugin-random-cnpj"
            icon={PillIcon.npm}
            description={t(LanguageItems.FirstProject)}
          />

          <Project
            title="gamedev4noobs"
            url="https://github.com/gustaandrade/gamedev4noobs"
            icon={PillIcon.github}
            description={t(LanguageItems.SecondProject)}
          />

          <Project
            title="gustavoandrade.design - web"
            url="https://github.com/gustaandrade/gustavoandrade.design"
            icon={PillIcon.react}
            description={t(LanguageItems.FourthProject)}
          />

          <Project
            title="gustavoandrade.design - mobile"
            url="https://github.com/gustaandrade/gustavoandrade.design"
            icon={PillIcon.mobile}
            description={t(LanguageItems.ThirdProject)}
          />

          <Project
            title="tomb-keeper"
            url="https://github.com/gustaandrade/global-game-jam-2020"
            icon={PillIcon.unity}
            description={t(LanguageItems.FifthProject)}
          />

          <Project
            title="star-picross"
            url="https://github.com/gustaandrade/"
            icon={PillIcon.mobile}
            description={t(LanguageItems.SixthProject)}
          />
        </ProjectScroll>
      </ProjectScrollArea>
    </Container>
  );
};

export default withTheme(Projects);
