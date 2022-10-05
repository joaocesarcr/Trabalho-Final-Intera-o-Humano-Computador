import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import Store from "../components/store";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TextInput, StyleSheet, Button, View, Text } from "react-native";

export default function selectStore({ navigation }) {
  function mapStores({ navigation }) {
    let stores = [];
    for (let i = 0; i < 10; i++) {
      stores.push({
        nome: "Local " + i,
        endereco: "Endereço ",
        tags: ["1"],
        nota: 5,
        contato:""+ i + i + i + i+ "-" + i + i + i + i,
      });
    }
    return stores.map((x) => (
      <Store x={x} navigation={navigation} key={x.nome} />
    ));
  }

  return (
    <View>
      <Text style={styles.titulo}> {navigation.getParam("nome")} </Text>
      <ScrollView>{mapStores({ navigation })}</ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  titulo: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
  },
});
const stores = [
  {
    nome: "Endereço",
    endereco: "Tags",
    tags: ["1"],
    nota: 5,
    contato: 1,
  },
  {
    nome: "Local 2",
    endereco: "Endereço 2",
    tags: ["2"],
    nota: 4.3,
    contato: 2,
  },
  {
    nome: "Local 3",
    endereco: "Endereço 3",
    tags: ["3"],
    nota: 5,
    contato: 3,
  },
];
