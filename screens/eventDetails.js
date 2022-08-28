import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import { TextInput, StyleSheet, Button, View, Text } from "react-native";

export default function EventDetails({navigation}, name, checkList) {
  function mapCheckboxes() {
    return navigation.getParam("details")["servicosSelecionados"].map( (x) => <Text> {x} </Text>)
  }

  return (
    <View>
      <Text style={styles.titulo}> {navigation.getParam("details")["nome"]} </Text>
      <Text> Servicos selecionados: </Text>
      {mapCheckboxes()}
    </View>
  );
}

      // {...navigation.getParam("details")}
const styles = StyleSheet.create({
  evento: {
    marginTop: 16,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#fff",
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold",
  },
  titulo: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
  }
});
