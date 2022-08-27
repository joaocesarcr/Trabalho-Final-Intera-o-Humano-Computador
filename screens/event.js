import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import { TextInput, StyleSheet, Button, View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Event(eventObj, {navigation}) {
  return (
    <View>
      <Text> {eventObj.nome} </Text>
    </View>
  );
}
