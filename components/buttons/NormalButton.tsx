import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {CSSProperties, FC} from 'react';
import theme from '../../theme/theme';

import {useNavigation} from '@react-navigation/native';

type Props = {
  buttonText: string;
  buttonStyle?: Object;
  buttonTextColor?: Object;
  onPress?: () => void;
  page?: string;
};

const NormalButton: FC<Props> = ({
  buttonText = 'Next',
  buttonStyle,
  buttonTextColor,
  onPress,
  page,
}) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => {
        onPress ? onPress() : navigation.navigate(page);
      }}
      style={[styles.button, buttonStyle]}>
      <Text style={[styles.buttonText, buttonTextColor]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.primary.backgroundColor,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    textTransform: 'capitalize',
    letterSpacing: 1.5,
    fontWeight: '600',
    color: theme.primary.color,
  },
});

export default NormalButton;
