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

import Header from '../components/Header';
const SelectBanks = () => {
  const navigation = useNavigation();
  const [active, setActive] = useState(false);
  const openUnitBox = () => {
    setActive(prev => !prev);
  };
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
        },
      ]}>
      {/* <StatusBar hidden={true} /> */}

      <View style={styles.container}>
        <View style={styles.main_container}>
          <Header title="Select Bank" />

          <View style={styles.selectSavedBanks}>
            <Text
              style={{
                textTransform: 'capitalize',
                fontSize: 20,
                fontWeight: '600',
                color: theme.secondary.color,
              }}>
              select a saved bank
            </Text>
            <Text
              style={{
                textTransform: 'capitalize',

                fontSize: 20,
                fontWeight: '600',
                color: theme.secondary.color,
              }}>
              account
            </Text>
          </View>
          <View
            style={{
              gap: 10,
            }}>
            <View style={{padding: 20, borderRadius: 25}}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing em eligendi.
                Quas, eaque.
              </Text>
            </View>
          </View>

          {/* </Animatable.Text> */}
        </View>
        <View style={{paddingHorizontal: 20}}>
          <NormalButton
            buttonStyle={
              {
                //   border
              }
            }
            buttonText="Proceed"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectBanks;

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
    width: '90%',
    textAlign: 'center',
    fontSize: 13,

    fontWeight: '700',
  },

  changePinTextContainer: {
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectSavedBanks: {
    gap: 10,
  },
});
