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
      <View style={styles.menu}>
        <Text style={styles.text} > {eventObj.nome} </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  evento: {
    marginTop: 16,
    borderWidth: 4,
    borderColor: "#20232a",
    color: "#20232a",
    fontWeight: "bold",
  },
  text: {
    color: "#ffffff",
    marginLeft: 10,
    fontSize: 30,
  },
  menu: {
    fontWeight: "bold",
    justifyContent: "center",
    marginLeft: "5%",
    width: "90%",
    height: 80,
    marginBottom: 10,

    /* menus */

    backgroundColor: "#4C1690",
    borderWidth: 1,
    borderColor:"#000000",
  },
});

//    backgroundColor: "#fff",
