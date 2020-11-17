import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authStackNavigator";
import MainTab from "./mainTabNavigator";
import { useSelector } from "react-redux";
import { IAuth } from "../features/auth/types";

const Stack = createStackNavigator();

const appNavigator: FC = () => {
  const isSignedIn = useSelector((state: IAuth) => state.loggedIn);
  return (
    <NavigationContainer>
      {console.log(isSignedIn)}
      {isSignedIn ? <MainTab /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default appNavigator;
