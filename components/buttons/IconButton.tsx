import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import F5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

type Props = {
  buttonStyle?: Object;
  iconStyle?: Object;
  iconName: string;
  iconSize?: number;
  onPress?: Function;
};

const IconButton: FC<Props> = ({
  buttonStyle,
  iconName,
  iconStyle,
  iconSize = 20,
  onPress,
}) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => (onPress ? onPress() : null)}
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
      <F5 style={iconStyle} name={iconName} size={iconSize} />
    </TouchableOpacity>
  );
};

export default IconButton;
