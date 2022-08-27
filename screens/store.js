import React from "react";
import { useNavigation } from '@react-navigation/native';
import { TextInput, StyleSheet, Button, View, Text } from "react-native";

export default function Store(store,{navigation}) {
  if (store) {
  return (
    <View style={styles.container}>
      <Text> {store.nome}</Text>
      <Text> {store.endereco}</Text>
      <Text> ⭐ {store.nota}</Text>
      <Button
        onPress={ () => navigation.navigate("StoreDetails", { storeDetails: store })}
        title=""
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

    </View>
  );
  }
  else return (
  <View style={styles.container}>
    <Text> aaaa </Text>
    </View>
  )
}

/*
 *
      
      <Text> {store.tags[0]}</Text>
      */

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#fff",
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold",
  },
});
