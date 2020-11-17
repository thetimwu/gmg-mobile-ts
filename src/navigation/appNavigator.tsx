import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authStackNavigator";
import MainTab from "./mainTabNavigator";
import { useSelector } from "react-redux";
import { RootState } from "../redux-store/rootReducer";

const Stack = createStackNavigator();

const appNavigator: FC = () => {
  const isSignedIn = useSelector((state: RootState) => state.auth.loggedIn);

  return (
    <NavigationContainer>
      {isSignedIn ? <MainTab /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default appNavigator;
