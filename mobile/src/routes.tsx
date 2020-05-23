import React from "react";
import { Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabBarOptions
} from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next";
import { withTheme } from "styled-components";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

import i18n from "./i18n";

import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Options from "./pages/Options";

import { LanguageItems } from "./resources/enums";
import { RoutesProps } from "./types";

const Tab = createBottomTabNavigator();

const Routes: React.FC<RoutesProps> = props => {
  const [t] = useTranslation(undefined, { i18n });

  const bottomTabBarOptions: BottomTabBarOptions = {
    activeBackgroundColor: props.theme.Color2,
    inactiveBackgroundColor: props.theme.Color1,
    style: { height: 60, borderTopWidth: 3, borderTopColor: props.theme.Color3 }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={t(LanguageItems.Home)}
        backBehavior="history"
        tabBarOptions={bottomTabBarOptions}
      >
        <Tab.Screen
          name={t(LanguageItems.Home)}
          options={() => ({
            tabBarIcon: () => (
              <Image
                source={require("./assets/Avatar/avatar-minimalist.png")}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: props.theme.Color3
                }}
              />
            ),
            tabBarLabel: () => (
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: 12,
                  color: props.theme.Color4,
                  paddingBottom: 5
                }}
              >
                {t(LanguageItems.Home)}
              </Text>
            )
          })}
        >
          {() => <Home changeCustomTheme={props.changeTheme} />}
        </Tab.Screen>

        <Tab.Screen
          name={t(LanguageItems.Experiences)}
          component={Experiences}
          options={() => ({
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="briefcase-account"
                size={28}
                color={props.theme.Color3}
              />
            ),
            tabBarLabel: () => (
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: 12,
                  color: props.theme.Color4,
                  paddingBottom: 5
                }}
              >
                {t(LanguageItems.Experiences)}
              </Text>
            )
          })}
        />

        <Tab.Screen
          name={t(LanguageItems.Profile)}
          component={Profile}
          options={() => ({
            tabBarIcon: () => (
              <FontAwesome5
                name="user-alt"
                size={24}
                color={props.theme.Color3}
              />
            ),
            tabBarLabel: () => (
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: 12,
                  color: props.theme.Color4,
                  paddingBottom: 5
                }}
              >
                {t(LanguageItems.Profile)}
              </Text>
            )
          })}
        />

        <Tab.Screen
          name={t(LanguageItems.Projects)}
          component={Projects}
          options={() => ({
            tabBarIcon: () => (
              <FontAwesome5
                name="laptop-code"
                size={24}
                color={props.theme.Color3}
              />
            ),
            tabBarLabel: () => (
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: 12,
                  color: props.theme.Color4,
                  paddingBottom: 5
                }}
              >
                {t(LanguageItems.Projects)}
              </Text>
            )
          })}
        />

        <Tab.Screen
          name={t(LanguageItems.Options)}
          options={() => ({
            tabBarIcon: () => (
              <FontAwesome5 name="cog" size={24} color={props.theme.Color3} />
            ),
            tabBarLabel: () => (
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: 12,
                  color: props.theme.Color4,
                  paddingBottom: 5
                }}
              >
                {t(LanguageItems.Options)}
              </Text>
            )
          })}
        >
          {() => <Options changeCustomTheme={props.changeTheme} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default withTheme(Routes);
