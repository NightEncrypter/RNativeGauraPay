import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import F5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

type Props = {buttonStyle?: Object; iconStyle?: Object};

const BackButton: FC<Props> = ({buttonStyle, iconStyle}) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={[
        {
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          backgroundColor: 'white',
          borderColor: 'grey',
          borderWidth: 1,
        },
        buttonStyle,
      ]}>
      <F5 style={iconStyle} size={20} name="arrow-left" />
    </TouchableOpacity>
  );
};

export default BackButton;
