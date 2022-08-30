import React from "react";
import { TextInput, StyleSheet, Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function StoreDetails({ navigation }) {
  store = navigation.getParam("storeDetails");
  return (
    <View style={styles.center}>
      <View style={styles.photo}></View>
      <View style={styles.container}>
        <Text>Nome: {store.nome}</Text>
        <Text>Endereço: {store.endereco}</Text>
        <Text> {store.tags[0]}</Text>
        <Text> ⭐ {store.nota}</Text>
        <Text>Contato: {store.contato}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#fff",
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold",
    width: "100%",
  },
  photo: {
    width: 300,
    height: 300,
    backgroundColor: "#aaa",
  },
  center: {
    alignItems: 'center',
  }
});
