import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
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
import CustomModal from '../components/CustomModal';
const AddMoneyPage = () => {
  const navigation = useNavigation<any>();
  const [active, setActive] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    setOpenModal(false);
  };
  const nextPage = () => {
    navigation.navigate('');
  };

  const handleAddAmount = () => {
    setOpenModal(true);
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
          <NormalButton buttonText="Add Amount" onPress={handleAddAmount} />
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
              <Image source={require('../assets/img/Illustration.png')} />

              <View style={{gap: 5}}>
                <Text
                  style={{
                    maxWidth: 400,
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 14,
                  }}>
                  You are paying 200.00
                </Text>
                <Text
                  style={{
                    // textTransform: 'capitalize',
                    maxWidth: 400,
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 14,
                  }}>
                  Enter your 4-digit IPIN to confirm
                </Text>
              </View>
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
                  Forgot IPIN
                </Text>
              </TouchableOpacity>
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
