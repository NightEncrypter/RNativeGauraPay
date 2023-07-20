import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import theme from '../theme/theme';
import {useNavigation} from '@react-navigation/native';

const MainLogoScreen = () => {
  const navigation = useNavigation<any>();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('PanInfo');
    }, 2000);
  }, []);

  return (
    <View style={{backgroundColor: theme.primary.backgroundColor, flex: 1}}>
      <View style={{width: '100%', flex: 2}}>
        <Image
          source={require('../assets/img/handcred.png')}
          style={{width: '100%'}}
        />
      </View>
      <View style={{flex: 1}} />
      <View style={{alignSelf: 'center', top: 80}}>
        <Image source={require('../assets/img/gpay.png')} />
      </View>
      <View style={{flex: 1}} />

      <View style={{alignSelf: 'center'}}>
        <Text style={{color: 'white'}}>Made in India</Text>
      </View>
      <View style={{flex: 1}}>
        <Image source={require('../assets/img/Maskgroup.png')} />
      </View>
    </View>
  );
};

export default MainLogoScreen;
