import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import {
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
  Button,
  View,
  Text,
} from "react-native";

export default function Service(props) {
  const navigation = props.navigation;
  const nome = props.x;
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.push("SelectStore", { navigation, nome: nome })}
    >
      <View style={styles.evento}>
        <Text style={styles.text}> {nome} </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  evento: {
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
    marginTop: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    color: "#20232a",
    fontWeight: "bold",
    backgroundColor: "#4C1690",
    borderWidth: 1,
    borderColor:"#000000",
  },
  text: {
    color: "#ffffff",
    marginLeft: 10,
    fontSize: 30,
  },

});

