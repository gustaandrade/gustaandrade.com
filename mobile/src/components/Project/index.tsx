import React from "react";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { withTheme } from "styled-components";
import * as Analytics from "expo-firebase-analytics";

import {
  ProjectArea,
  ProjectTitleArea,
  ProjectDescriptionArea,
  ProjectTitleText,
  ProjectDescriptionText,
  ProjectTitleIconArea,
  ProjectTitleTextArea
} from "./styles";

import { ProjectProps } from "./types";
import { PillIcon } from "../../resources/enums";

const Project: React.FC<ProjectProps> = props => {
  const openURL = async (url: string, origin: string) => {
    await Analytics.logEvent("ProjectButtonClicked", {
      name: origin,
      screen: "Projects"
    });

    Linking.openURL(url);
  };

  return (
    <ProjectArea onPress={() => openURL(props.url, props.title)}>
      <ProjectTitleArea>
        <ProjectTitleIconArea>
          {props.icon === PillIcon.github && (
            <FontAwesome5 name="github" size={36} color={props.theme.Color3} />
          )}
          {props.icon === PillIcon.mobile && (
            <FontAwesome5 name="android" size={36} color={props.theme.Color3} />
          )}
          {props.icon === PillIcon.npm && (
            <FontAwesome5 name="npm" size={36} color={props.theme.Color3} />
          )}
          {props.icon === PillIcon.react && (
            <FontAwesome5 name="react" size={36} color={props.theme.Color3} />
          )}
          {props.icon === PillIcon.unity && (
            <MaterialCommunityIcons
              name="unity"
              size={36}
              color={props.theme.Color3}
            />
          )}
        </ProjectTitleIconArea>

        <ProjectTitleTextArea>
          <ProjectTitleText>{props.title}</ProjectTitleText>
        </ProjectTitleTextArea>
      </ProjectTitleArea>

      <ProjectDescriptionArea>
        <ProjectDescriptionText>{props.description}</ProjectDescriptionText>
      </ProjectDescriptionArea>
    </ProjectArea>
  );
};

export default withTheme(Project);
