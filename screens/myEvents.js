import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import { TextInput, StyleSheet, Button, View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Event from "./event"

export default function myEvents({navigation}) {
  const [myEventsList, changeEventsList] = React.useState(
 [
  {
    "nome": "Aniversário", 
    "servicosSelecionados": ["Som", "Buffet", "Local"],
  },
  {
    "nome": "Churrasco", 
    "servicosSelecionados": ["DJ", "Dancarinos", "Local"],
  }
]

  );
  function mapMyEvents() {
    return myEventsList.map( (x) => 
      <Event
        navigation = {navigation}
        x = {x}
        key = {x.nome}
      /> )
  }

  function addEvent(nome, servicosSelecionados) {
    changeEventsList(myEventsList.concat({"nome": nome, "servicosSelecionados": servicosSelecionados}));
  }
  return (
    <View>
      {mapMyEvents()}
      <Button
        onPress={ () => navigation.push("CheckServices",{navigation, "func": addEvent})}
        title="+"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        style = {styles.addButton}
      />
    </View>
  );
}

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

const styles = StyleSheet.create({
  addButton: {
    marginTop: 16,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#fff",
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold",
    width: "10%",
  },
});
