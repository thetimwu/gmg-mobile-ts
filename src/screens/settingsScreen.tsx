import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { List, TouchableRipple } from "react-native-paper";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { ROUTES } from "../routes";
import { SettingProps } from "../navigation/types";

const settingScreen: FC<SettingProps> = ({
  route,
  navigation,
}: SettingProps) => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout);
  };
  // this.props.navigation.navigate("ChangePassword")
  return (
    <View>
      <TouchableRipple
        onPress={() => navigation.navigate(ROUTES.ChangePassword)}
      >
        <List.Item
          title={"Change Password"}
          left={(props) => <List.Icon {...props} icon="cached" />}
        />
      </TouchableRipple>
      <TouchableRipple onPress={logoutHandler}>
        <List.Item
          title={"Logout"}
          left={(props) => <List.Icon {...props} icon="exit-to-app" />}
        />
      </TouchableRipple>
    </View>
  );
};

export default settingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
