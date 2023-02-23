import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

export default function Home() {
  const toggle = true;
  return (
    <View style={toggle ? styles.container : styles.containerLigth}>
      <Text>Home</Text>
    </View>
  );
}
