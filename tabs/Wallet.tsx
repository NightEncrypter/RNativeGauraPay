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
import {useNavigation} from '@react-navigation/native';
import NormalButton from '../components/buttons/NormalButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconButton from '../components/buttons/IconButton';
import Header from '../components/Header';
import TransactionCard from '../components/cards/TransactionCard';
const Wallet = () => {
  const navigation = useNavigation<any>();
  const handleAddMoney = () => {
    navigation.navigate('AddMoney');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden={false} />
      {/* <ScrollView style={styles.main_container}> */}

      <View style={styles.container}>
        <View style={styles.main_container}>
          <Image
            style={{
              position: 'absolute',
              zIndex: -1,
              top: 50,
              left: 0,
              right: 0,
            }}
            source={require('../assets/img/design2.png')}
          />

          <Header
            dark
            iconName="question"
            title="Wallet"
            titleStyle={{
              color: 'white',
            }}
          />

          <View
            style={{
              marginVertical: 20,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 10,
            }}>
            <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <IconButton
                buttonStyle={{
                  width: 30,
                  height: 30,
                  padding: 3,
                  borderColor: 'white',
                  backgroundColor: 'black',
                }}
                iconSize={16}
                iconStyle={{color: 'white'}}
                iconName="rupee-sign"
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: theme.primary.color,
                }}>
                200.00
              </Text>
            </View>
            <Text
              style={{color: theme.primary.color, textTransform: 'capitalize'}}>
              total balance wallet
            </Text>
          </View>

          <NormalButton
            onPress={handleAddMoney}
            buttonText="Add Money"
            buttonStyle={{
              marginTop: 10,
              backgroundColor: theme.secondary.backgroundColor,
              borderWidth: 1,
              borderColor: 'black',
            }}
            buttonTextColor={{
              fontSize: 16,
              color: theme.secondary.color,
            }}
          />
        </View>

        <View>
          <Text
            style={{
              fontSize: 22,
              paddingHorizontal: 20,
              paddingTop: 20,
              fontWeight: '600',
              color: 'black',
            }}>
            Transaction
          </Text>
        </View>
        <ScrollView style={styles.scrollContainer}>
          {new Array(10).fill(0).map((v, i) => (
            <TransactionCard key={i} />
          ))}
        </ScrollView>
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

  scrollContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
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
    position: 'relative',
    padding: 20,

    backgroundColor: '#1C1D1F',
  },
  whiteCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
    margin: 7,
  },

  userBankText: {
    color: 'white',
    fontSize: 16,
    opacity: 0.6,
    textTransform: 'capitalize',
  },
  userBankHighlightText: {
    color: 'white',
    fontSize: 18,
  },
  userBankInfoContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 10,
    gap: 10,
  },
  horizontalLine: {
    width: '100%',
    backgroundColor: 'white',
    opacity: 0.6,
    height: 1,
  },
  userImgBox: {
    margin: 7,
    width: 35,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBalanceContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  shareDetailBox: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
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

export default Wallet;
