import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import NormalButton from '../components/buttons/NormalButton';
import {useNavigation} from '@react-navigation/native';

const CongratulationPage = () => {
  const navigation = useNavigation<any>();
  const nextPage = () => {
    navigation.navigate('MainHome');
  };
  return (
    <View style={styles.congoContainer}>
      <View style={styles.equalMargin}>
        <Image source={require('../assets/img/Business_Deal_3.png')} />
      </View>

      <View style={styles.equalMargin}>
        <Image source={require('../assets/img/welcome.png')} />
      </View>
      <View style={styles.congo}>
        <NormalButton onPress={nextPage} buttonText="Go to Home" />
      </View>
    </View>
  );
};

export default CongratulationPage;

const styles = StyleSheet.create({
  congoContainer: {
    flex: 1,
    padding: 20,

    alignItems: 'center',
  },

  equalMargin: {
    marginVertical: 25,
  },
  congo: {
    width: '100%',
    marginTop: 25,
  },
});
