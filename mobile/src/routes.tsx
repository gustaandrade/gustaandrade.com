import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppStack = createBottomTabNavigator();

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Options from "./pages/Options";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Detail" component={Detail} />
        <AppStack.Screen name="Options" component={Options} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
