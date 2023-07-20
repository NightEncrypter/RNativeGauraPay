import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import theme from '../theme/theme';

import {useNavigation} from '@react-navigation/native';
import NormalButton from '../components/buttons/NormalButton';

import Header from '../components/Header';
import CustomModal from '../components/CustomModal';
const BlockCard = () => {
  const navigation = useNavigation();

  const [openModal, setOpenModal] = useState(false);
  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
        },
      ]}>
      <View style={styles.container}>
        <View style={styles.main_container}>
          <Header title="Block card" />

          <View style={styles.mainImg}>
            <Image source={require('../assets/img/block.png')} />
          </View>
          <View style={styles.changePinTextContainer}>
            <Text style={styles.changePinText}>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo con
            </Text>
          </View>

          {/* </Animatable.Text> */}
        </View>
        <View style={{padding: 20}}>
          <NormalButton
            buttonText="Confirm"
            onPress={() => setOpenModal(true)}
          />
          <NormalButton
            page="MainHome"
            buttonText="Back to home"
            buttonStyle={{
              marginTop: 10,
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: 'black',
            }}
            buttonTextColor={{
              color: theme.secondary.color,
            }}
          />
        </View>
      </View>

      <CustomModal
        closeModal={() => setOpenModal(false)}
        openModal={openModal}
        children={
          <>
            <View
              style={{
                alignItems: 'center',
                gap: 20,
              }}>
              <Image source={require('../assets/img/success.png')} />
              <Text
                style={{
                  fontSize: 20,
                  color: theme.secondary.color,
                  fontWeight: '700',
                }}>
                Successfull
              </Text>
              <Text style={{maxWidth: 300, textAlign: 'center'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                nisi, eaque minus reiciendis sed cupiditate a autem temporibus
                id tempo
              </Text>
              <NormalButton
                buttonStyle={{width: '100%'}}
                buttonText="Confirm"
                onPress={() => setOpenModal(false)}
              />
            </View>
          </>
        }
      />
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

  mainImg: {
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

export default BlockCard;
