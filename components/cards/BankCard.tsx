import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import theme from '../../theme/theme';

const BankCard = () => {
  return (
    <View style={styles.bankBox}>
      <View style={styles.innerBox}>
        <View
          style={{
            width: 30,
            height: 30,
            // borderColor: 'D9D9D9',
            // borderWidth: 4,
            // borderRadius: 25,
            // padding: 4,
            // justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <Image source={require('../../assets/img/sbi.png')} />
        </View>
        <View>
          <Text
            style={styles.holderName}
            //   style={styles.holderName}
          >
            Holder Name
          </Text>
          <Text style={styles.accountNoText}>a/c no. **** **** 0000</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   holderName: {
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     gap: 10,
  //   },

  selectABankHead: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: '600',
    color: theme.secondary.color,
  },
  accountHead: {
    textTransform: 'capitalize',

    fontSize: 20,
    fontWeight: '600',
    color: theme.secondary.color,
  },
  holderName: {
    color: 'black',
    fontSize: 14,
    fontWeight: '800',
  },
  accountNoText: {
    color: 'black',

    opacity: 0.7,
    fontSize: 14,
    fontWeight: '600',
  },
  bankBox: {
    padding: 10,
    borderRadius: 30,
    borderColor: '#000',
    borderWidth: 1,
    opacity: 0.6,
  },

  innerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  selectSavedBanks: {
    gap: 10,
  },
});
export default BankCard;
