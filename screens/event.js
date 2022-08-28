import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import { TouchableWithoutFeedback, TextInput, StyleSheet, Button, View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Event(props) {
  const navigation = props.navigation
  const eventObj = props.x
  return (
    <TouchableWithoutFeedback 
      onPress={ () => navigation.push("EventDetails",{navigation, "details": eventObj})}
    >
      <View style={styles.evento}>
        <Text> {eventObj.nome} </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  evento: {
    marginTop: 16,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold",
  },
});

//    backgroundColor: "#fff",
