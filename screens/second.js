import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Second({navigation}) {
  return (
    <View >
      <Text> Mensagem: </Text>
      <Text> {navigation.getParam('msg')} </Text>
    </View>
  );
}
