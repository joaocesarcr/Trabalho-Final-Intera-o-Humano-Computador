import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import { TouchableNativeFeedback, TextInput, StyleSheet, Button, View, Text } from "react-native";
import Service from "../components/service";

export default function EventDetails({ navigation }, name, checkList) {
  function mapCheckboxes() {
    return navigation
      .getParam("details")
      ["servicosSelecionados"].map((x) => (
        <Service navigation={navigation} x={x} key={x} />
      ));
  }

  return (
    <View>
      <Text style={styles.titulo}>
        {navigation.getParam("details")["nome"]}
      </Text>
      <TouchableNativeFeedback
        onPress={() =>
          {
        }}
        title="+"
        color="#200048"
        style={styles.addButton}
      >
        <View style={styles.addButton}>
        </View>
      </TouchableNativeFeedback>

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
  },
});
