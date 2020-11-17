import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens";
import { ROUTES } from "../routes";

const { Navigator, Screen } = createStackNavigator();
const BottomTabNav = createBottomTabNavigator();

function buttomTab() {
  return (
    <BottomTabNav.Navigator>
      <BottomTabNav.Screen name="Messages" component={HomeScreen} />
    </BottomTabNav.Navigator>
  );
}

const mainTabNavigator: FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={ROUTES.Login} component={HomeScreen} />
    </Navigator>
  );
};

export default mainTabNavigator;
