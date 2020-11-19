import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, SettingsScreen, ChangePasswordScreen } from "../screens";
import { ROUTES } from "../routes";

// const MainStack = createStackNavigator();
const { Navigator, Screen } = createStackNavigator();
const BottomTabNav = createBottomTabNavigator();
const SettingStack = createStackNavigator();

// function buttomTab() {
//   return (
//     <BottomTabNav.Navigator>
//       <BottomTabNav.Screen name={ROUTES.Home} component={homeStack} />
//       <BottomTabNav.Screen name={ROUTES.Setting} component={settingStack} />
//     </BottomTabNav.Navigator>
//   );
// }

function homeStack() {
  return (
    <Navigator
    // screenOptions={{
    //   headerShown: false,
    // }}
    >
      <Screen name={ROUTES.Home} component={HomeScreen} />
    </Navigator>
  );
}

function settingStack() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name={ROUTES.Setting} component={SettingsScreen} />
      <SettingStack.Screen
        name={ROUTES.ChangePassword}
        component={ChangePasswordScreen}
      />
    </SettingStack.Navigator>
  );
}

const mainTabNavigator: FC = () => {
  return (
    <BottomTabNav.Navigator>
      <BottomTabNav.Screen name={ROUTES.Home} component={homeStack} />
      <BottomTabNav.Screen name={ROUTES.Setting} component={settingStack} />
    </BottomTabNav.Navigator>
  );
};

export default mainTabNavigator;
