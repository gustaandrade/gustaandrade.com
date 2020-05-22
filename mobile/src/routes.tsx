import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTranslation } from "react-i18next";
import { withTheme } from "styled-components";
import { FontAwesome5 } from "@expo/vector-icons";

import i18n from "./i18n";

const Tab = createBottomTabNavigator();

import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Details from "./pages/Details";
import Options from "./pages/Options";

import { LanguageItems } from "./resources/enums";
import { RoutesProps } from "./types";

const Routes: React.FC<RoutesProps> = props => {
  const [t] = useTranslation(undefined, { i18n });

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={t(LanguageItems.Home)}
        backBehavior="history"
      >
        <Tab.Screen
          name={t(LanguageItems.Home)}
          component={Home}
          options={() => ({
            tabBarIcon: () => (
              <FontAwesome5 name="home" size={24} color={props.theme.Color2} />
            ),
            tabBarLabel: () => (
              <Text style={{ fontSize: 14, color: props.theme.Color4 }}>
                {t(LanguageItems.Home)}
              </Text>
            )
          })}
        />
        <Tab.Screen
          name={t(LanguageItems.Experiences)}
          component={Experiences}
        />
        <Tab.Screen name={t(LanguageItems.Details)} component={Details} />
        <Tab.Screen name={t(LanguageItems.Options)} component={Options} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default withTheme(Routes);
