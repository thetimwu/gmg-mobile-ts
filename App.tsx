import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from "react-redux";
import store, {persistor} from "./src/redux-store/store";
import {PersistGate} from "redux-persist/integration/react";
import AppNavigator from './src/navigation/appNavigator'

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <StatusBar style="auto" />
          <AppNavigator />
          </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}
