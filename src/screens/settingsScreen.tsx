import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { List, TouchableRipple } from "react-native-paper";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const settingScreen: FC = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout);
  };
  // this.props.navigation.navigate("ChangePassword")
  return (
    <View>
      <TouchableRipple onPress={() => {}}>
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
