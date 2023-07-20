import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {FC} from 'react';
import F5 from 'react-native-vector-icons/FontAwesome5';
type Props = {
  iconName: string;
  placeholderText?: string;
  inputStyle?: Object;
};
const InputGroup: FC<Props> = ({iconName, placeholderText, inputStyle}) => {
  return (
    <View style={[styles.inputBox, inputStyle]}>
      <View
        style={{
          width: 32,
          height: 32,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
          backgroundColor: 'white',
        }}>
        <F5 name={iconName} size={16} />
      </View>
      <TextInput style={styles.textInput} placeholder={placeholderText} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 8,
    backgroundColor: '#CBCBCB',
    paddingVertical: 2,
  },
  textInput: {
    letterSpacing: 1.1,
    fontWeight: '700',
    fontSize: 15,
    flex: 1,
    marginLeft: 10,
  },
});

export default InputGroup;
