import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import Check from "./check"
import { TextInput, StyleSheet, Button, View, Text } from "react-native";

export default function checkServices({navigation}) {
  const [nomeEvento, onChangeInput] = React.useState("");
  const [checkList, changeCheckListState] = React.useState([]);

  function changeCheckList(name,checked) {
    let newCheckList;
    checked ? newCheckList = checkList.concat(name) : newCheckList = checkList.filter(function(item) { return item !== name}); 
    changeCheckListState(newCheckList)
  }

  function mapServicos() {
    return servicos.map( (x) => Check(x, changeCheckList));
  }

  return (
    <View>
      <TextInput
        onChangeText={onChangeInput}
        value={nomeEvento}
        placeholder="Nome do evento"
      />

      {mapServicos() }

      <Button
        onPress={ () => { navigation.getParam("func")(nomeEvento,checkList); navigation.goBack()}}
        title="Salvar"
        color="#841584"
      />

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
