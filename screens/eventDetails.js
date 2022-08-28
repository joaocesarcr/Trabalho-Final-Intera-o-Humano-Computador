import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import { TextInput, StyleSheet, Button, View, Text } from "react-native";
import Service from "./service";

export default function EventDetails({navigation}, name, checkList) {
  function mapCheckboxes() {
    return navigation.getParam("details")["servicosSelecionados"].map( (x) =>  Service({navigation}, x))
  }

  return (
    <View>
      <Text style={styles.titulo}> {navigation.getParam("details")["nome"]} </Text>
      {mapCheckboxes()}
    </View>
  );
}

      // {...navigation.getParam("details")}
const styles = StyleSheet.create({
  titulo: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
  }
});
