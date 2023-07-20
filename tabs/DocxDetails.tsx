import {
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import F5 from 'react-native-vector-icons/FontAwesome5';

// import Courses from '../components/Home/Courses';
// import Courses_btns from './Courses_btns';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import theme from '../theme/theme';
import InputGroup from '../components/inputComponents/InputGroup';
import {useNavigation} from '@react-navigation/native';
import NormalButton from '../components/buttons/NormalButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../components/buttons/BackButton';
const DocxDetails = () => {
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <BackButton />

            <Text
              style={{
                fontSize: 25,
                fontWeight: '600',
                color: theme.primary.backgroundColor,
              }}>
              Pan Details
            </Text>
            <View />
          </View>
          <View style={{flexDirection: 'row', gap: 15, marginVertical: 10}}>
            <View
              style={{
                flex: 1,
                height: 4,
                backgroundColor: theme.indicators.bg,
                borderRadius: 30,
              }}>
              <View
                style={{
                  width: '50%',
                  height: '100%',

                  backgroundColor: theme.indicators.fill,
                }}></View>
            </View>
            <View
              style={{
                flex: 1,
                height: 4,
                backgroundColor: theme.indicators.bg,
              }}></View>
            <View
              style={{
                flex: 1,
                height: 4,
                backgroundColor: theme.indicators.bg,
              }}></View>
          </View>

          <InputGroup
            placeholderText={'Email'}
            inputStyle={{
              marginTop: 15,
            }}
            iconName={'credit-card'}
          />
          <InputGroup
            placeholderText={'Date of Birth'}
            iconName={'calendar'}
            inputStyle={{
              marginTop: 15,
            }}
          />

          <TouchableOpacity
            style={styles.accordionContainer}
            onPress={openUnitBox}>
            <Text style={styles.accordion}>Show More</Text>

            <Icon size={20} name={active ? 'chevron-up' : 'chevron-down'} />
          </TouchableOpacity>

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
        <View style={{marginTop: 30, paddingHorizontal: 20}}>
          <NormalButton buttonText="Next" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DocxDetails;

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

  accordionContainer: {
    marginTop: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  accordion: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    paddingVertical: 10,
    fontWeight: '700',

    // color: '#fff',
    // textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
});
