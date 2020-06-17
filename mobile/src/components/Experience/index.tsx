import React from "react";
import { withTheme } from "styled-components";

import {
  ExperienceArea,
  ExperienceTitleRow,
  ExperienceTitleArea,
  ExperienceDescriptionArea,
  ExperienceTitleText,
  ExperienceDurationText,
  ExperienceDescriptionText
} from "./styles";

import { ExperienceProps } from "./types";

const Experience: React.FC<ExperienceProps> = props => {
  return (
    <ExperienceArea>
      <ExperienceTitleArea>
        <ExperienceTitleText>{props.title}</ExperienceTitleText>
      </ExperienceTitleArea>

      <ExperienceTitleRow>
        <ExperienceTitleArea>
          <ExperienceDurationText>{props.role}</ExperienceDurationText>
        </ExperienceTitleArea>

        <ExperienceTitleArea>
          <ExperienceDurationText>{props.period}</ExperienceDurationText>
        </ExperienceTitleArea>
      </ExperienceTitleRow>

      <ExperienceDescriptionArea>
        <ExperienceDescriptionText>
          {props.description}
        </ExperienceDescriptionText>
      </ExperienceDescriptionArea>
    </ExperienceArea>
  );
};

export default withTheme(Experience);
