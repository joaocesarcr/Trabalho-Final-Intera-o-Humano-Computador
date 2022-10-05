import React from "react";
import {
  Alert,
  TouchableNativeFeedback,
  Image,
  TextInput,
  StyleSheet,
  Button,
  View,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function StoreDetails({ navigation }) {
  function save() {
    Alert.alert(
      "Local Salvo",
      "Dados do "+ store.nome+ " salvos com sucesso!")
    navigation.push("MyEvents", { navigation})
  }
  store = navigation.getParam("storeDetails");
  return (
    <View style={styles.center}>
      <View style={styles.photo}></View>
      <View style={styles.container}>
        <Text>Nome: {store.nome}</Text>
        <Text>Endereço: {store.endereco}</Text>
        <Text> ⭐ {store.nota}</Text>
        <Text>Contato: {store.contato}</Text>
      </View>
      <View style={styles.bContainer}>
        <TouchableNativeFeedback
          onPress={() => save()}
          title="+"
          color="#200048"
          style={styles.addButton}
        >
          <View style={styles.addButton}>
            <Image source={require("../imgs/Check_fill.png")} />
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {}}
          title="+"
          color="#200048"
          style={styles.addButton}
        >
          <View style={styles.addButton}>
            <Image source={require("../imgs/Chat_alt_3_fill.png")} />
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bContainer: {
    marginTop: 35,
  },
  addButton: {
    backgroundColor: "#4c1690",
    width: 300,
    height: 60,
    margin: 10,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#fff",
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold",
    width: "90%",
    padding: 10,
  },
  photo: {
    marginTop: 16,
    width: 300,
    height: 300,
    backgroundColor: "#aaa",
  },
  center: {
    alignItems: "center",
  },
});
