import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import IconButton from './IconButton';
import theme from '../../theme/theme';
import F5 from 'react-native-vector-icons/FontAwesome5';

type Props = {
  buttonText: string;
  iconName: string;
  onPress?: Function;
};

const IconWithText: FC<Props> = ({buttonText, iconName, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => (onPress ? onPress() : null)}
      style={{
        gap: 5,
        alignItems: 'center',
      }}>
      {/* <IconButton
        //   onPress={() => (onPress ? onPress() : null)}
        iconName={iconName}
        buttonStyle={{
          width: 65,
          height: 65,
          borderRadius: 50,
        }}
        iconStyle={{
          color: theme.secondary.color,
        }}
      /> */}

      <View
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
        ]}>
        <F5
          style={{
            color: theme.secondary.color,
            opacity: 0.7,
          }}
          name={iconName}
          size={20}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '500',
          color: theme.secondary.color,
        }}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default IconWithText;
