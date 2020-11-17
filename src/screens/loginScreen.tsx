import React, { FC, useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { Text, TextInput, Button, Surface, Title } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { loginAsync } from "../features/auth/authSlice";
import { IAuth } from "../features/auth/types";

const loginScreen: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  //   const [error, setError] = useState<string>("");

  const dispatch = useDispatch();

  const error = useSelector((state: IAuth) => state.error);
  console.log(error);
  const nameChangeHandler = (text: string): void => {
    setUsername(text);
  };

  const passwordChangeHandler = (text: string): void => {
    setPassword(text);
  };

  const loginHandler = () => {
    dispatch(loginAsync({ username, password }));
    console.log(error);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Surface style={styles.loginForm}>
        <Title style={styles.loginFormTitle}>Login</Title>
        <Text style={styles.errorText}>{error}</Text>
        <TextInput
          value={username}
          label="User Name"
          keyboardType="default"
          autoCapitalize="none"
          error={!!error}
          onChangeText={nameChangeHandler}
          style={[styles.textInput, styles.formInput]}
        />
        <TextInput
          value={password}
          label="Password"
          error={!!error}
          secureTextEntry={true}
          onChangeText={passwordChangeHandler}
          style={[styles.textInput, styles.formInput]}
        />
        <Button
          mode="contained"
          //   loading={}
          //   disabled={this.props.loading}
          onPress={loginHandler}
          style={[styles.loginButton, styles.formInput]}
        >
          Login
        </Button>
      </Surface>
    </KeyboardAvoidingView>
  );
};

const Stack = createStackNavigator();

export default loginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  loginForm: {
    padding: 15,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    elevation: 4,
  },
  loginFormTitle: {
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 20,
  },
  textInput: {
    backgroundColor: "transparent",
  },
  formInput: {
    width: "90%",
    marginBottom: 10,
  },
  loginButton: {
    marginTop: 20,
  },
  errorText: {
    color: "red",
  },
});
