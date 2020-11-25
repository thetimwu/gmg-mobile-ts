import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";

interface Props {
  plotNumber: number;
  isActive: boolean;
  type: string;
  cursorVentsDone: number | null;
  ventsDone: number | null;
  vents: number | null;
  cursorHipCutsDone: number | null;
  hipCutsDone: number | null;
  hipCuts: number | null;
  cursorValleyCutsDone: number | null;
  valleyCutsDone: number | null;
  valleyCuts: number | null;
  cursorBeadsDone: number | null;
  beadsDone: number | null;
  beads: number | null;
  cursorIngoesDone: number | null;
  ingoesDone: number | null;
  ingoes: number | null;
  handleUpdate: (value: number, cursor: string) => void;
}

const plotDetails = (props: Props) => {
  return <div></div>;
};
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  title: {
    fontSize: 18,
    paddingVertical: 5,
    fontWeight: "500",
  },
  divider: {
    marginVertical: 5,
  },
});

export default plotDetails;
