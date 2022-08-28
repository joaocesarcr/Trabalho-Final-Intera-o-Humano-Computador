import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import Store from "./store";
import { useNavigation } from "@react-navigation/native";
import { TextInput, StyleSheet, Button, View, Text } from "react-native";

export default function selectStore({ navigation }) {

  function mapStores({ navigation }) {
    //    return stores.map( (x) => Store(x,{navigation}));
    let stores = [];
    for (let i = 0; i < 10; i++) {
      stores.push({
        nome: "Local " + i,
        endereco: "Endereço " + i,
        tags: ["1"],
        nota: 5,
        contato: i,
      });
    }
    return stores.map((x) => Store(x,{navigation}))
  }

    return (
      <View>
        <Text> {navigation.getParam("nome")} </Text>
        {mapStores({ navigation })}
      </View>
    );
  }

const stores = [
  {
    nome: "Local 1",
    endereco: "Endereço 1",
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
