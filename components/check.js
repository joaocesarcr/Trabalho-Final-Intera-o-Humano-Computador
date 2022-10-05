import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import { TextInput, StyleSheet, Button, View, Text } from "react-native";

export default function Check(props) {
  const name = props.name;
  const changeCheckList = props.changeCheckList;
  return (
    <View>
      <BouncyCheckbox
        size={25}
        fillColor="#0BCE83"
        unfillColor="#FFFFFF"
        text={name}
        iconStyle={{ borderColor: "white" }}
        innerIconStyle={{ borderWidth: 2 }}
        style={{
          margin: 5,
          borderWidth: 1,
          borderRadius: 3,
          padding: 10,
          backgroundColor: "#4c1690",
        }}
        textStyle={{
          textDecorationLine: "none",
          color: "white",
        }}
        onPress={(isChecked: boolean) => {
          changeCheckList(name, isChecked);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 3,
    color: "#4C1690",
  },
  input: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 3,
  },
});
