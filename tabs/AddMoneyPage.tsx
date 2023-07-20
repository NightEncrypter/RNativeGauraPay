import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';

// import Courses from '../components/Home/Courses';
// import Courses_btns from './Courses_btns';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import theme from '../theme/theme';
import InputGroup from '../components/inputComponents/InputGroup';
import {useNavigation} from '@react-navigation/native';
import NormalButton from '../components/buttons/NormalButton';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../components/Header';
const AddMoneyPage = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(false);
  const openUnitBox = () => {
    setActive(prev => !prev);
    // if (AnimationRef.current) {

    //   // AnimationRef.current?.bounce();
    // }

    // Animated.timing(fadder.animatableFadder, {
    //   toValue: 1,
    //   duration: 1000,
    //   useNativeDriver: false,
    // }).start();
  };
  return (
    <SafeAreaView
      style={[
        {
          // justifyContent: 'center',
          // alignItems: 'center',
          flex: 1,
        },
      ]}>
      {/* <StatusBar hidden={true} /> */}
      {/* <ScrollView style={styles.main_container}> */}

      <View style={styles.container}>
        <View style={styles.main_container}>
          <Header title="Add Money" />

          <View style={styles.changePinImg}>
            <Image source={require('../assets/img/addmoney.png')} />
          </View>
          <View style={styles.changePinTextContainer}>
            <Text style={styles.changePinText}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo con
            </Text>
          </View>

          <>
            {active && (
              <InputGroup
                placeholderText={'Name (As Per Pan)'}
                iconName={'user'}
                inputStyle={{
                  marginTop: 15,
                }}
              />
            )}
          </>
          {/* </Animatable.Text> */}
        </View>
        <View style={{paddingHorizontal: 20}}>
          <InputGroup
            placeholderText={'Enter amount'}
            inputStyle={{
              backgroundColor: 'white',
              marginTop: 15,
            }}
            iconName={'lock'}
          />
          <InputGroup
            placeholderText={'Confirm amount'}
            iconName={'calendar'}
            inputStyle={{
              backgroundColor: 'white',
              marginVertical: 15,
              marginBottom: 30,
            }}
          />
          <NormalButton buttonText="Add Amount" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBCBCB',
    // marginHorizontal: 20,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 8,
    backgroundColor: '#CBCBCB',
  },
  textInput: {
    flex: 1,
    marginLeft: 15,
  },
  main_container: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    // minHeight: 330,
    padding: 20,
    backgroundColor: 'white',
    // flex: 1,
  },
  button: {
    backgroundColor: theme.primary.backgroundColor,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 13,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    fontWeight: '600',
    color: theme.primary.color,
  },

  changePinImg: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  changePinText: {
    width: '75%',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '700',
  },

  changePinTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default AddMoneyPage;
