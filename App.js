import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./routes/stack";
import Header from "./components/Header";
export default function App() {
  return (
    <View style={styles.view}>
      <Navigator
      style={styles.nav} />
    </View>
  );
}

const styles = StyleSheet.create({
  config: {},
  text: {
    color: "orange",
  },
  abs: {
    position: "absolute",
    alignSelf: "center"
  },
  nav: {},
  view: {
    height: "100%",
  },
});
