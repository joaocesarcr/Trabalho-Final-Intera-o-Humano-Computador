import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Accelerometer } from 'expo-sensors';

export default function Accel({navigation}) {

  const [now, setNow] = useState(0);
  const [prev, setPrev] = useState(0);
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };

  const { x, y, z } = data;

  useInterval(() => {
      setPrev(prev => now);
      setNow(now => x);
      if ((now - prev )> 0.5) {
        navigation.navigate('Second', {msg: "Outra tela"})
      }
  },100)

  useEffect(() => {
    _subscribe();
  }, []);


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Accelerometer: </Text>
      <Text style={styles.text}>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </Text>
    </View>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
});

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
