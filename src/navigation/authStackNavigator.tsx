import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../screens";
import { ROUTES } from "../routes";

const { Navigator, Screen } = createStackNavigator();

const authStackNavigator: FC = () => {
  return (
    <Navigator>
      <Screen
        name={ROUTES.Login}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default authStackNavigator;
