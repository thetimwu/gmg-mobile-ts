import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux-store/rootReducer";
import { StyleSheet, Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import moment from "moment";
import { createStackNavigator } from "@react-navigation/stack";
import { getUserProgrammesAsync } from "../features/programme/programmeSlice";

const homeScreen: FC = () => {
  const userId = useSelector((state: RootState) => state.auth.user?.id);
  const loading = useSelector((state: RootState) => state.auth.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      try {
        dispatch(
          getUserProgrammesAsync(
            moment().utc().startOf("day").toISOString(),
            userId
          )
        );
      } catch (error) {}
    }
  }, []);
  return (
    <View style={styles.container}>
      <Text>homeScreen</Text>
      <Spinner visible={loading} overlayColor="rgba(0,0,0,0.25)" />
    </View>
  );
};

const Stack = createStackNavigator();

export default homeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
  programmeContainer: {
    margin: 20,
  },
  successSnackbar: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "green",
  },
  failureSnackbar: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "red",
  },
  clockInOut: {
    position: "absolute",
    top: 45,
    right: 25,
  },
});
