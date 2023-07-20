import {
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
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
import Header from '../components/Header';
import CustomModal from '../components/CustomModal';
const AadhaarDetails = () => {
  const navigation = useNavigation<any>();
  const [active, setActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const getOTP = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const nextPage = () => {
    navigation.navigate('TakeASelfie');
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
          {/* <View
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
          </View> */}

          <Header title="aadhar detail" />
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
            placeholderText={'Aadhaar Number'}
            inputStyle={{
              marginTop: 15,
            }}
            iconName={'credit-card'}
          />

          {/* </Animatable.Text> */}
        </View>
        <View style={{marginTop: 30, paddingHorizontal: 20}}>
          <NormalButton buttonText="Get otp" onPress={getOTP} />
        </View>
      </View>
      <CustomModal
        whiteContainerStyle={{
          width: '100%',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        transparentStyle={{
          justifyContent: 'flex-end',
        }}
        closeModal={closeModal}
        openModal={openModal}
        children={
          <>
            <View
              style={{
                alignItems: 'center',
                gap: 20,
              }}>
              <Image source={require('../assets/img/otp.png')} />

              <Text
                style={{
                  maxWidth: 400,
                  textAlign: 'center',
                  fontWeight: '500',
                  fontSize: 14,
                }}>
                otp has been sent on mobile number please enter otp to verify
                mobile number.
              </Text>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                {new Array(4).fill(0).map((v, i) => (
                  <TextInput
                    key={i}
                    style={{
                      paddingBottom: 2,
                      borderBottomColor: theme.secondary.color,
                      borderBottomWidth: 2,
                    }}
                  />
                ))}
              </View>
              <TouchableOpacity style={styles.whiteRoundContainer}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: '500',
                  }}>
                  Resend Pin
                </Text>
              </TouchableOpacity>
              <NormalButton
                buttonStyle={{width: '100%'}}
                buttonText="Submit"
                onPress={nextPage}
              />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  whiteRoundContainer: {
    borderColor: theme.primary.backgroundColor,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 20,
    opacity: 0.8,
    borderRadius: 25,
  },
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

export default AadhaarDetails;
