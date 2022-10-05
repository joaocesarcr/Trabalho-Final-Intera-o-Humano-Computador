import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import Check from "../components/check";
import {
  TextInput,
  StyleSheet,
  TouchableNativeFeedback,
  ScrollView,
  Button,
  View,
  Text,
} from "react-native";

export default function checkServices({ navigation }) {
  const [nomeEvento, onChangeInput] = React.useState("");
  const [checkList, changeCheckListState] = React.useState([]);

  function changeCheckList(name, checked) {
    let newCheckList;
    checked
      ? (newCheckList = checkList.concat(name))
      : (newCheckList = checkList.filter(function (item) {
          return item !== name;
        }));
    changeCheckListState(newCheckList);
  }

  function mapServicos() {
    return (
      <View style={{ height: "80%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {mapCheck()}
        </ScrollView>
      </View>
    );
  }

  function mapCheck() {
    return servicos.map((x) => (
      <Check name={x} changeCheckList={changeCheckList} key={x} />
    ));
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeInput}
        value={nomeEvento}
        placeholder="Nome do evento"
        style={styles.input}
      />

      {mapServicos()}

      <View style={styles.buttonsContainer}>
        <TouchableNativeFeedback
          onPress={() => {
            navigation.getParam("func")(nomeEvento, checkList);
            navigation.goBack();
          }}
          title="Salvar"
          color="#841584"
        >
          <View style={styles.addButton}>
            <Text style={styles.text}> Salvar</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback
          onPress={() => {
            navigation.goBack();
          }}
          title="Cancelar"
          color="#841584"
        >
          <View style={styles.addButton}>
            <Text style={styles.text}> Cancelar</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  addButton: {
    padding: 20,
    marginTop: 20,
    alignItems: "center",
    width: "40%",
    margin: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#4c1690",
    textDecorationLine: "none",
  },
  text: {
    color: "white",
  },
  container: {
    margin: 20,
  },
  input: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 3,
  },
});
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
  "Garçons",
];
