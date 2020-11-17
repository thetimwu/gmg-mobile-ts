import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const changePasswordScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>changePasswordScreen</Text>
    </View>
  );
};

const Stack = createStackNavigator();

export default changePasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
