import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import {
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
  Button,
  View,
  Text,
} from "react-native";

export default function Service(props) {
  const navigation = props.navigation;
  const nome = props.x;
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.push("SelectStore", { navigation, nome: nome })}
    >
      <View style={styles.serviceDiv}>
        <Text> {nome} </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  serviceDiv: {
    marginTop: 16,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    color: "#20232a",
    fontSize: 20,
    fontWeight: "bold",
  },
});

//    backgroundColor: "#fff",
