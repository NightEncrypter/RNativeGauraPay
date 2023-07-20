import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import NormalButton from '../components/buttons/NormalButton';
import BackButton from '../components/buttons/BackButton';
import theme from '../theme/theme';
import {useNavigation} from '@react-navigation/native';

const Selfie = () => {
  const navigation = useNavigation<any>();
  const nextPage = () => {
    navigation.navigate('Congo');
  };
  const handleLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.selfieContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <BackButton />

        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: theme.primary.backgroundColor,
          }}>
          Selfie
        </Text>
        <View />
      </View>
      <View style={styles.selfieImg}>
        <Image source={require('../assets/img/selfie.png')} />
      </View>

      {/* <View style={styles.equalMargin}>
        <Image source={require('../assets/img/welcome.png')} />
      </View> */}
      <View style={{gap: 20}}>
        <NormalButton buttonText="Continue" onPress={nextPage} />
        <NormalButton
          onPress={handleLogin}
          buttonText="Take a new selfie"
          buttonStyle={{
            backgroundColor: theme.secondary.backgroundColor,
            borderWidth: 1,
            borderColor: 'black',
          }}
          buttonTextColor={{
            color: theme.secondary.color,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selfieContainer: {
    flex: 1,
    padding: 20,
  },
  selfieImg: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 80,
  },
});

export default Selfie;
