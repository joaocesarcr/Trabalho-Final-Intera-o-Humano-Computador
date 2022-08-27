import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import Check from "./check"
import { TextInput, StyleSheet, Button, View, Text } from "react-native";

export default function checkServices() {
  function mapServicos() {
    return servicos.map( (x) => Check(x));
  }
  return (
    <View>
      {mapServicos() }
    </View>
  );
}

const servicos = [
  "Som",
  "Local",
  "Música",
  "Iluminação",
  "Limpeza",
  "Buffet",
  "Bebidas",
  "Transporte",
  "Decoração",
  "Segurança",
  "Garçons"
]
