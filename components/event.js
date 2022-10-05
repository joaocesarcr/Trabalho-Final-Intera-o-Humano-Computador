import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from "react";
import {
  TouchableNativeFeedback,
  TextInput,
  StyleSheet,
  Button,
  View,
  Text,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Event(props) {
  const navigation = props.navigation;
  const eventObj = props.x;
  const archive = props.archive;
  if (!props.isEditing) {
    return (
      <TouchableNativeFeedback
        onPress={() =>
          navigation.push("EventDetails", { navigation, details: eventObj })
        }
      >
        <View style={styles.menu}>
          <View style={styles.textContainerNot}>
            <Text style={styles.text}> {eventObj.nome} </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <View style={styles.editingContainer}>
        <View style={styles.menu}>
          <TouchableNativeFeedback onPress={() => archive(eventObj.nome)}>
            <View style={styles.imgContainerX}>
              <Image
                style={styles.img}
                source={require("../imgs/Close_round.png")}
              />
            </View>
          </TouchableNativeFeedback>

          <View style={styles.textContainer}>
            <Text style={styles.text}> {eventObj.nome} </Text>
          </View>

          <TouchableNativeFeedback onPress={() => archive(eventObj.nome)}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.img}
                source={require("../imgs/Arhive_load_fill.png")}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textContainerNot: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainerX: {
    alignItems: "center",
    backgroundColor: "#D62727",
    width: 50,
    height: "100%",
    justifyContent: "center",
  },

  imgContainer: {
    alignItems: "center",
    backgroundColor: "#0BCE83",
    width: 50,
    height: "100%",
    justifyContent: "center",
  },
  img: {
    alignSelf: "center",
  },
  editingContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  evento: {
    marginTop: 16,
    borderWidth: 4,
    borderColor: "#20232a",
    color: "#20232a",
    fontWeight: "bold",
  },
  text: {
    color: "#ffffff",
    marginLeft: 10,
    fontSize: 30,
  },
  menu: {
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "5%",
    width: "90%",
    height: 80,
    marginBottom: 10,
    flexDirection: "row",

    /* menus */

    backgroundColor: "#4C1690",
    borderWidth: 1,
    borderColor: "#000000",
  },
});

//    backgroundColor: "#fff",
