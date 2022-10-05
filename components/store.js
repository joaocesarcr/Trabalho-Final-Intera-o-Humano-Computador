import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TextInput,
  TouchableNativeFeedback,
  StyleSheet,
  Button,
  View,
  Text,
} from "react-native";

export default function Store(props) {
  const store = props.x;
  const navigation = props.navigation;
  if (store) {
    return (
      <TouchableNativeFeedback
        onPress={() =>
          navigation.navigate("StoreDetails", { storeDetails: store })
        }
      >
        <View style={styles.container}>
          <View style={styles.photo}></View>
          <View>
            <Text> {store.nome}</Text>
            <Text> {store.endereco}</Text>
            <Text> ⭐ {store.nota}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  } else
    return (
      <View style={styles.container}>
        <Text> aaaa </Text>
      </View>
    );
}

//         <View >
//           <View style={styles.photo}> </View>

//        </View>
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#fff",
    color: "#20232a",
    fontSize: 30,
    fontWeight: "bold",
    width: "90%",
    paddingLeft: "5%",
    marginLeft: "5%",

    flexDirection: "row",
  },
  photo: {
    width: 60,
    height: 60,
    backgroundColor: "#aaa",
    marginRight: "1%",
  },
  flex: {},
});
