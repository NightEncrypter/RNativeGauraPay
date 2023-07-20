import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import theme from '../../theme/theme';

const TransactionCard = () => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.innerBox}>
        <View style={{width: 60, height: 60}}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('../../assets/img/amazon.png')}
          />
        </View>
        <View style={{justifyContent: 'space-between'}}>
          <Text style={{fontSize: 16, fontWeight: '800', textAlign: 'right'}}>
            Guy Hawkins
          </Text>
          <Text style={{fontWeight: '400'}}>08/30/14</Text>
        </View>
      </View>

      <View style={{justifyContent: 'space-between'}}>
        <Text style={{fontSize: 16, fontWeight: '800', textAlign: 'right'}}>
          Rs 200
        </Text>
        <Text style={{fontSize: 16, fontWeight: '400', textAlign: 'right'}}>
          Virtual Card
        </Text>
      </View>
    </View>
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
});

export default TransactionCard;
