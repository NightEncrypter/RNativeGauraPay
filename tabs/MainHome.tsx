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
import IconButton from '../components/buttons/IconButton';
import IconWithText from '../components/buttons/IconWithText';
import TransactionCard from '../components/cards/TransactionCard';
import ImageCard from '../components/cards/ImageCard';
const MainHome = () => {
  const navigation = useNavigation<any>();

  const showAllTrx = () => {
    navigation.navigate('Transactions');
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
      <StatusBar hidden={false} />
      <ScrollView style={{}}>
        <View style={styles.container}>
          <View style={styles.main_container}>
            <Image
              style={{
                position: 'absolute',
                zIndex: 1,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
              source={require('../assets/img/homedesign.png')}
            />

            <View style={{zIndex: 2}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    ...styles.whiteCircle,
                    marginLeft: -8,
                  }}>
                  <View style={styles.whiteCircle}>
                    <View style={styles.whiteCircle}>
                      <View style={styles.userImgBox}>
                        <Image
                          style={{}}
                          source={require('../assets/img/profile.png')}
                        />
                      </View>
                    </View>
                  </View>
                </View>

                <View>
                  <Image
                    style={{}}
                    source={require('../assets/img/gaurapay.png')}
                  />
                </View>
                <IconButton
                  buttonStyle={{
                    borderColor: 'white',
                    backgroundColor: 'black',
                  }}
                  iconStyle={{color: 'white'}}
                  iconName="search"
                />
              </View>
              <View style={styles.userBankInfoContainer}>
                <Text style={styles.userBankText}>account number</Text>
                <Text style={styles.userBankHighlightText}>
                  555000555000555
                </Text>
              </View>
              <View style={styles.horizontalLine} />
              <View
                style={{
                  justifyContent: 'space-between',
                  alignItems: 'center',

                  padding: 10,
                  gap: 10,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    opacity: 0.6,
                  }}>
                  IFSC code
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                  }}>
                  yesb0241005
                </Text>
              </View>

              <View style={styles.horizontalLine} />

              <View style={styles.viewBalanceContainer}>
                <View style={{flexDirection: 'row', gap: 7}}>
                  <Icon name="eye" style={{color: 'white'}} size={20} />
                  <Text style={{color: 'white', letterSpacing: 1}}>
                    View Balance
                  </Text>
                </View>
                <View style={styles.shareDetailBox}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 16,
                      fontWeight: '500',
                    }}>
                    Share details
                  </Text>
                </View>
              </View>

              <View style={{position: 'relative'}}>
                <View style={styles.whiteCard}>
                  <IconWithText buttonText="Credit" iconName="credit-card" />
                  <IconWithText buttonText="debit" iconName="cc-discover" />
                  <IconWithText
                    onPress={() => navigation.navigate('TMoney')}
                    buttonText="Recharge card"
                    iconName="university"
                  />
                </View>
              </View>
            </View>
          </View>

          <ScrollView horizontal style={{marginTop: 80, marginBottom: 10}}>
            {[1, 2, 3].map(v => (
              <Image
                key={v}
                style={{
                  // width: '100%',
                  height: 120,
                  borderRadius: 20,
                  marginLeft: 10,
                }}
                source={require('../assets/img/banner2.png')}
              />
            ))}
          </ScrollView>
          <View style={{paddingHorizontal: 10, paddingBottom: 60}}>
            <View
              style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 22,

                  fontWeight: '600',
                  color: 'black',
                }}>
                Transaction
              </Text>

              <TouchableOpacity
                onPress={showAllTrx}
                style={{
                  padding: 10,
                  paddingHorizontal: 20,
                  borderRadius: 30,
                  borderColor: 'black',
                  borderWidth: 1,
                }}>
                <Text style={{fontSize: 16, fontWeight: '700'}}>See All</Text>
              </TouchableOpacity>
            </View>

            {new Array(10).fill(0).map((v, i) => (
              <TransactionCard key={i} />
            ))}
          </View>
        </View>
      </ScrollView>
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

  whiteCard: {
    width: '100%',
    height: 120,
    position: 'absolute',
    top: 0,
    // left: '50%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    elevation: 4,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  main_container: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    position: 'relative',
    padding: 20,
    paddingBottom: 60,
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
    marginBottom: 40,
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

export default MainHome;
