import React from "react";
import { TouchableNativeFeedback, Image, TextInput, StyleSheet, Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={() =>
          navigation.push("CheckServices", { navigation, func: addEvent })
        }
      >
        <Image source={require('../imgs/Expand_left.png')} />
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "15%",
    paddingTop: "15%",
    backgroundColor: "#4c1690",
  },
  photo: {
    width: 300,
    height: 300,
    backgroundColor: "#aaa",
  },
  center: {
    alignItems: 'center',
  }
});
