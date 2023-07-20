import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import theme from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';

const TransactionCard = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ManageCard')}
      style={styles.boxContainer}>
      <View style={styles.innerBox}>
        <View style={{width: 60, height: 60}}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../../assets/img/amazon.png')}
          />
        </View>
        <View style={{justifyContent: 'space-between'}}>
          <Text style={styles.item}>Guy Hawkins</Text>
          <Text style={{fontWeight: '500'}}>08/30/14</Text>
        </View>
      </View>

      <View style={{justifyContent: 'space-between'}}>
        <Text style={styles.moneyText}>Rs 200</Text>
        <Text style={styles.virtualText}>Virtual Card</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    elevation: 4,
    marginBottom: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerBox: {
    flexDirection: 'row',
    gap: 10,
  },
  virtualText: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'right',
  },
  moneyText: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'right',
  },
  item: {
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'right',
  },
});

export default TransactionCard;
