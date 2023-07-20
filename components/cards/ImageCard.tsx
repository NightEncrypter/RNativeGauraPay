import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import theme from '../../theme/theme';

const ImageCard = () => {
  return (
    <View style={styles.boxContainer}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 20,
        }}
        source={require('../../assets/img/banner2.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    // borderRadius: 20,
    // padding: 5,
    // elevation: 4,

    width: '100%',
    height: 100,
  },
  innerBox: {
    width: '100%',
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

export default ImageCard;
