import React, { useState, useRef, useEffect } from "react";
import { Text, Image } from "react-native";
import {
  NavigationContainer,
  NavigationContainerRef,
  NavigationState,
  PartialState
} from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabBarOptions
} from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next";
import { withTheme } from "styled-components";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Analytics from "expo-firebase-analytics";

import i18n from "./i18n";

import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Options from "./pages/Options";

import { LanguageItems } from "./resources/enums";
import { RoutesProps } from "./types";

const Tab = createBottomTabNavigator();

const getActiveRouteName = (
  state: NavigationState | PartialState<NavigationState>
): string => {
  const route = state.routes[state.index!];

  if (route.state) return getActiveRouteName(route.state);
  return route.name;
};

const Routes: React.FC<RoutesProps> = props => {
  const [t] = useTranslation(undefined, { i18n });

  const [routeName, setRouteName] = useState<string>("Home");
  const navigationRef = useRef<NavigationContainerRef | null>(null);

  useEffect(() => {
    const state = navigationRef.current!.getRootState();
    setRouteName(getActiveRouteName(state));
  }, []);

  const bottomTabBarOptions: BottomTabBarOptions = {
    style: { height: 60 }
  };

  return (
    <NavigationContainer
      onStateChange={state => {
        const previousRouteName: string = routeName;
        const currentRouteName: string = getActiveRouteName(state!);

        if (previousRouteName !== currentRouteName)
          Analytics.setCurrentScreen(currentRouteName);

        setRouteName(currentRouteName);
      }}
      ref={navigationRef}
    >
      <Tab.Navigator
        initialRouteName={t(LanguageItems.Home)}
        backBehavior="history"
        tabBarOptions={bottomTabBarOptions}
      >
        <Tab.Screen
          name={t(LanguageItems.Home)}
          options={() => ({
            tabBarIcon: ({ focused, color }) => (
              <Image
                source={require("./assets/Avatar/avatar-minimalist.png")}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: color
                }}
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: 12,
                  paddingBottom: 5,
                  color: color
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
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons
                name="briefcase-account"
                size={28}
                style={{
                  color: color
                }}
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: 12,
                  paddingBottom: 5,
                  color: color
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
            tabBarIcon: ({ focused, color }) => (
              <FontAwesome5
                name="user-alt"
                size={24}
                style={{
                  color: color
                }}
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: 12,
                  paddingBottom: 5,
                  color: color
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
            tabBarIcon: ({ focused, color }) => (
              <FontAwesome5
                name="laptop-code"
                size={24}
                style={{
                  color: color
                }}
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: 12,
                  paddingBottom: 5,
                  color: color
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
            tabBarIcon: ({ focused, color }) => (
              <FontAwesome5
                name="cog"
                size={24}
                style={{
                  color: color
                }}
              />
            ),
            tabBarLabel: ({ focused, color }) => (
              <Text
                style={{
                  fontFamily: "OpenSans-Bold",
                  fontSize: 12,
                  paddingBottom: 5,
                  color: color
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
