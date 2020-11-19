import { ROUTES } from "../routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";

type SettingStackParamList = {
  ChangePassword: undefined;
};

type SettingScreenRouteProp = RouteProp<
  SettingStackParamList,
  ROUTES.ChangePassword
>;

type SettingScreenNavigationProp = StackNavigationProp<
  SettingStackParamList,
  ROUTES.ChangePassword
>;

export type SettingProps = {
  route: SettingScreenRouteProp;
  navigation: SettingScreenNavigationProp;
};
