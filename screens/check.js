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
        fillColor="blue"
        unfillColor="#FFFFFF"
        text={name}
        iconStyle={{ borderColor: "blue" }}
        innerIconStyle={{ borderWidth: 2 }}
        textStyle={{
          textDecorationLine: "none",
        }}
        onPress={(isChecked: boolean) => {changeCheckList(name,isChecked)}}
      />
    </View>
  );
}
