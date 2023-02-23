import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLigth: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ligth: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  textLogo: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  textLogoLigth: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: '#032e52',
  },
});

export default styles;
