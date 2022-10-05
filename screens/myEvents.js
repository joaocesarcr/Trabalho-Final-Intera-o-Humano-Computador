import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import {
  Image,
  TextInput,
  StyleSheet,
  Button,
  View,
  Text,
  TouchableNativeFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Event from "../components/event";

export default function myEvents({ navigation }) {
  const [isEditing, changeEditing] = React.useState(false);
  const [myEventsList, changeEventsList] = React.useState([
    {
      nome: "Aniversário",
      servicosSelecionados: ["Som", "Buffet", "Local"],
    },
    {
      nome: "Churrasco",
      servicosSelecionados: ["Garçons", "Bebidas", "Limpeza"],
    },
  ]);
  function mapMyEvents(isEditing) {
    return myEventsList.map((x) => (
      <Event
        archive={archive}
        isEditing={isEditing}
        navigation={navigation}
        x={x}
        key={x.nome}
      />
    ));
  }

  function archive(nome) {
    let newList = myEventsList.filter(function (item) {
          return item.nome !== nome;
        });
    changeEventsList(newList);

  }

  function addEvent(nome, servicosSelecionados) {
    changeEventsList(
      myEventsList.concat({
        nome: nome,
        servicosSelecionados: servicosSelecionados,
      })
    );
  }

  function showButtons(isEditing) {
    if (!isEditing) {
      return (
        <>
          <TouchableNativeFeedback
            onPress={() => changeEditing(!isEditing)}
            title="+"
            color="#200048"
            style={styles.addButton}
          >
            <View style={styles.addButton}>
              <Image source={require("../imgs/Subtract.png")} />
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            onPress={() =>
              navigation.push("CheckServices", { navigation, func: addEvent })
            }
            title="+"
            color="#200048"
            style={styles.addButton}
          >
            <View style={styles.addButton}>
              <Text style={styles.text}> + </Text>
            </View>
          </TouchableNativeFeedback>
        </>
      );
    } else {
      return (
        <TouchableNativeFeedback
          onPress={() => changeEditing(!isEditing)}
          title="+"
          color="#200048"
          style={styles.addButton}
        >
          <View style={styles.addButton}>
            <Image source={require("../imgs/Check_fill.png")} />
          </View>
        </TouchableNativeFeedback>
      );
    }
  }

  return (
    <View style={styles.flex}>
      {mapMyEvents(isEditing)}
      <View style={styles.botoes}>{showButtons(isEditing)}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  botoes: {
    flexDirection: "row",
    position: "absolute",
    marginTop: 520,
    justifyContent: "space-between",
    width: "90%",
  },
  addButton: {
    postition: "absolute",
    borderWidth: 1,
    borderColor: "#20232a",
    borderRadius: 100,
    height: 80,
    width: 80,
    backgroundColor: "#4c1690",
    color: "#20232a",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  flex: {
    alignItems: "center",
    margin: 20,
  },
});
/*
 *
        onPress={ () => addEvent("asd","asd")}
myEventsList = [
  {
    "nome": "Aniversário", 
    "servicosSelecionados": ["Som", "Buffet", "Local"],
  },
  {
    "nome": "Churrasco", 
    "servicosSelecionados": ["DJ", "Dancarinos", "Local"],
  }
]
*/
