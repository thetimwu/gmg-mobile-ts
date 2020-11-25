import React, { FC, SyntheticEvent, useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";
import { TouchableRipple } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  value: number;
  max: number;
  min: number;
  title: string;
  disabled: boolean;
  update: (value: number) => void;
}

const numberInput = (props: Props) => {
  const disabled = props.disabled || props.min === props.max;
  const [inputValue, setValue] = useState(0);

  const changeHandler = (text: string) => {
    const parsed = text.replace(/[^0-9]g/, "");
    if (parsed === "" || parseInt(parsed) <= props.max) {
      setValue(parseInt(parsed));
    }
  };

  const submitHandler = (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    const parsed = e.nativeEvent.text.replace(/[^0-9]g/, "");
    const parsedInt = parsed === "" ? 0 : parseInt(parsed);
    if (parsedInt > props.min) {
      setValue(parsedInt);
      props.update(parsedInt);
    } else {
      setValue(props.min);
    }
  };

  // const endEditingHandler = (e:NativeSyntheticEvent<TextInputSubmitEditingEventData>)=>{
  //   const parsed = e.nativeEvent.text.replace(/[^0-9]g/, '')
  // }

  const increment = () => {
    if (props.value < props.max) {
      props.update(props.value + 1);
    }
  };

  const decrement = () => {
    if (props.value > props.min) {
      props.update(props.value - 1);
    }
  };

  const numberRange = (max: number) => {
    if (max < 10) {
      return <Text style={styles.text}> / {"  " + max} </Text>;
    } else {
      return <Text style={styles.text}> / {max} </Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontWeight: "bold" }]}>{props.title}</Text>
      <View style={styles.inputContainer}>
        {!disabled ? (
          <TouchableRipple
            disabled={inputValue === props.min}
            onPress={decrement}
            style={styles.button}
          >
            <AntDesign name="minussquare" size={25} color="red" />
          </TouchableRipple>
        ) : null}
        <View
          style={
            disabled
              ? [styles.valueContainer, { paddingRight: 30 }]
              : styles.valueContainer
          }
        >
          <TextInput
            editable={!(props.disabled || props.min === props.max)}
            style={styles.numberInput}
            value={inputValue.toString()}
            keyboardType="numeric"
            maxLength={4}
            onChangeText={changeHandler}
            onSubmitEditing={submitHandler}
            onEndEditing={submitHandler}
          />
          {numberRange(props.max)}
        </View>
        {!disabled ? (
          <TouchableRipple
            disabled={inputValue === props.max}
            onPress={increment}
            style={styles.button}
          >
            <AntDesign name="plussquare" size={25} color="green" />
          </TouchableRipple>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    marginVertical: 5,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  valueContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  numberInput: {
    backgroundColor: "transparent",
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderBottomWidth: 0,
    fontSize: 17,
    textAlign: "center",
    minHeight: 25,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    paddingHorizontal: 5,
  },
});

export default numberInput;
