import React, { useState } from "react";
import Collapsible from "react-native-collapsible";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  collapsed: boolean;
  heading: string;
  children?: React.ReactChild | React.ReactChild[];
}

const expansionPanel = (props: Props) => {
  const [collapsed, setCollapsed] = useState<boolean>(props.collapsed);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleCollapsed}>
        <View style={styles.headingContainer}>
          <View style={styles.headingText as StyleProp<ViewStyle>}>
            {props.heading}
          </View>
          <Ionicons color="#757575" name="md-arrow-dropdown" size={20} />
        </View>
      </TouchableOpacity>
      <Collapsible style={styles.collapsible} collapsed={collapsed}>
        <View style={styles.content}>{props.children}</View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headingText: {
    fontSize: 17,
  },
  collapsible: {},
  content: {},
});

export default expansionPanel;
