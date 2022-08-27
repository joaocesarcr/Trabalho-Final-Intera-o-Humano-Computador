import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import { TextInput, StyleSheet, Button, View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Event from "./event"

export default function myEvents({navigation}) {
  function mapMyEvents() {
    return myEventsList.map( (x) => Event(x, {navigation}));
  }
  return (
    <View>
      {mapMyEvents()}
      <Button
        onPress={ () => navigation.navigate("CheckServices")}
        title="Novo Evento"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

myEventsList = [
  {
    "nome": "Aniversário", 
  },
  {
    "nome": "Churrasco", 
  }
]
