import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/stack';

export default function App() {
    return (
      <Navigator />
    );
}

