import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import ligthOn from '../assets/images/ecolight-on.png';
import ligthOf from '../assets/images/ecolight-off.png';

export default function Home() {
  const toggle = true;
  return (
    <View style={toggle ? styles.container : styles.containerLigth}>
      <Image source={toggle ? ligthOf : ligthOn} style={styles.ligth} />
      <Text style={toggle ? styles.textLogo : styles.textLogoLigth}>
        PlayLigth
      </Text>
    </View>
  );
}
